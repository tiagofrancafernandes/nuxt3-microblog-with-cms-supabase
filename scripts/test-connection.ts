import { Client } from 'pg';
import 'dotenv/config';

const connectionString = process.env.PG_CONNECTION_STRING as string;

async function testConnection() {
    const client = new Client({ connectionString });
    try {
        await client.connect();
        const res = await client.query('SELECT NOW()');
        console.log('Conexão bem-sucedida:', res.rows[0]);
        await client.end();
        process.exit(0);
    } catch (err) {
        console.error('Falha na conexão:', err);
        process.exit(1);
    }
}

testConnection();
