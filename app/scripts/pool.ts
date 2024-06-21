import { Pool } from "@vercel/postgres";
require('dotenv').config();

interface PoolDetails{
    user: string,
    host: string,
    database: string,
    password: string,
    port: number
}
