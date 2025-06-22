import { Client } from 'pg';
import prompts from 'prompts';
import 'dotenv/config';

const connectionString = process.env.PG_CONNECTION_STRING as string;

const TABLES = [
    {
        name: 'posts',
        sql: `
      create table public.posts (
        id uuid primary key default gen_random_uuid(),
        user_id uuid references auth.users(id),
        image_url text not null,
        image_source text,
        tags text[],
        category text,
        caption text,
        visibility text check (visibility in ('public', 'private')) default 'public',
        created_at timestamp with time zone default now()
      );
      grant select, insert, update, delete on public.posts to anon, authenticated;
    `,
    },
    // Adicione outras tabelas aqui
];

async function tableExists(client: Client, table: string) {
    const { rows } = await client.query(`select to_regclass('public.${table}') as exists`);
    return !!rows[0].exists;
}

async function migrate({ mode }: { mode: 'forcada' | 'inicial' | 'incremental' }) {
    const client = new Client({ connectionString });
    await client.connect();

    if (mode === 'forcada') {
        const confirm = await prompts({
            type: 'confirm',
            name: 'value',
            message: 'Tem certeza que deseja RECRIAR todas as tabelas? Isso apagará os dados.',
        });
        if (!confirm.value) {
            console.log('Operação cancelada.');
            process.exit(0);
        }
        for (const t of TABLES) {
            await client.query(`drop table if exists public.${t.name} cascade;`);
        }
    }

    for (const t of TABLES) {
        if (mode === 'forcada' || mode === 'inicial') {
            await client.query(t.sql);
            console.log(`Tabela ${t.name} criada.`);
        } else if (mode === 'incremental') {
            if (!(await tableExists(client, t.name))) {
                await client.query(t.sql);
                console.log(`Tabela ${t.name} criada.`);
            } else {
                console.log(`Tabela ${t.name} já existe.`);
            }
        }
    }

    await client.end();
    console.log('Migração concluída.');
}

import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))

let { mode } = argv;

(async () => {
    if (!mode) {
        const { mode: promptMode } = await prompts({
            type: 'select',
            name: 'mode',
            message: 'Modo de migração',
            choices: [
                { title: 'Forçada (recria tudo)', value: 'forcada' },
                { title: 'Inicial (primeira execução)', value: 'inicial' },
                { title: 'Incremental (cria apenas se não existir)', value: 'incremental' },
            ],
        });
        mode = promptMode
    }
    await migrate({ mode });
})();
