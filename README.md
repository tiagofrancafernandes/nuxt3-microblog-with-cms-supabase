Este projeto é um microblog com CMS/admin, autenticação (email/senha e OAuth), upload de imagens, tags, categorias, visibilidade de posts e suporte a migrações programáticas do banco de dados no Supabase.
Ideal para quem quer um exemplo moderno de frontend integrado a backend serverless.

# Nuxt 3 Microblog with CMS & Supabase

Aplicação de microblog moderna, mobile-first e dark-first, construída com Nuxt 3, Vue 3, Supabase, Tailwind CSS, SSR/SSG, Pinia e Vite.
Inclui área pública, autenticação (email/senha e OAuth), CMS/admin, upload de imagens, gerenciamento de posts, temas, e migrações programáticas para o banco de dados Supabase.

---

## Índice

- [Descrição](#descrição)
- [Stack](#stack)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Migração de Dados (Banco)](#migração-de-dados-banco)
  - [Modos de Migração](#modos-de-migração)
  - [Comandos de Migração e Teste](#comandos-de-migração-e-teste)
- [Comandos do Projeto](#comandos-do-projeto)
- [Layouts](#layouts)
- [Rotas Principais](#rotas-principais)
- [Deploy](#deploy)

---

## Descrição

Este projeto é um microblog com CMS/admin, autenticação (email/senha e OAuth), upload de imagens, tags, categorias, visibilidade de posts e suporte a migrações programáticas do banco de dados no Supabase.
Ideal para quem quer um exemplo moderno de frontend integrado a backend serverless.

---

## Stack

- **Nuxt 3** (Vue 3, Composition API)
- **Supabase** (PostgreSQL, Auth, Storage)
- **Tailwind CSS**
- **Pinia**
- **Vite**
- **SSR/SSG**
- **Deploy Netlify**

---

## Configuração do Ambiente

1. **Clone o repositório e instale as dependências:**
   ```bash
   git clone <repo-url>
   cd <nome-do-projeto>
   npm install
   # ou
   pnpm install
   # ou
   yarn install
   ```

2. Configure suas variáveis de ambiente:
```env
DATABASE_URL=
SUPABASE_URL=
SUPABASE_KEY=
PG_CONNECTION_STRING=postgresql://postgres:<password>@<host>:5432/database
# Adicione outras variáveis necessárias
```

## Migração do Banco de Dados

### Configuração Inicial
```bash
npm run db:test ## Testa a conexão com o banco
npm run db:migrate:forcada ## Refaz o
npm run db:migrate:inicial
npm run db:migrate:incremental
```
**Comportamento dos modos de migration:**

- **inicial**
  - Cria todas as tabelas do zero.
  - Se alguma tabela já existir, pode lançar erro (dependendo do SQL usado).
  - Use apenas na primeira execução em um banco vazio.

- **incremental**
  - Analisa se cada tabela já existe.
  - Só cria a tabela se ela não existir.
  - Não altera tabelas já existentes.
  - Seguro para rodar múltiplas vezes; não apaga nem recria nada que já existe.

- **forcada** ⚠️🚨
    - O parâmetro **forcada** (usado como `--mode=forcada` no comando de migração) faz com que o script de migração apague todas as tabelas do banco de dados relacionadas ao projeto e as recrie do zero.
    - **O que acontece quando você usa `forcada`:**
        - O script solicita uma confirmação para evitar exclusão acidental.
        - Todas as tabelas definidas no script de migração são removidas (comando `DROP TABLE IF EXISTS ...`).
        - Em seguida, todas as tabelas são criadas novamente, vazias, conforme o esquema definido.
        - Todos os dados existentes nessas tabelas serão perdidos.
    - **Quando usar o modo `forcada`?**
        - Quando você quer resetar completamente o banco de dados para o estado inicial do projeto.
        - Útil em ambiente de desenvolvimento, **nunca recomendado em produção** salvo se for a intensão de reset dos registros.

---

**Resumo prático:**

- Use **inicial** para criar toda a estrutura em um banco novo.
- Use **incremental** para garantir que tabelas faltantes sejam criadas sem afetar as existentes.
- 🚨 O modo `forcada` é **destrutivo**: **apaga tudo** e recria **do zero**. Use com cuidado!

**Resultado:**
- **inicial**: cria tudo, pode dar erro se já existir.
- **incremental**: só cria o que não existe, nunca apaga nada.
- **forcada**: **apaga tudo** e recria **do zero**.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Database Commands

### Test Database Connection
```bash
# npm
npm run db:test

# pnpm
pnpm db:test

# yarn
yarn db:test
```

### Supabase Commands
```bash
# Start Supabase locally
npx supabase start

# Stop Supabase
npx supabase stop

# Generate types
npx supabase gen types typescript --local > types/supabase.ts
```

## Testing

Run the test suite:

```bash
# npm
npm run test

# pnpm
pnpm test

# yarn
yarn test
```
