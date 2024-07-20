import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema'
import { env } from './env';

declare global{
    var database: PostgresJsDatabase<typeof schema> | undefined
}

let database: PostgresJsDatabase<typeof schema>
let pg: ReturnType<typeof postgres>

if(env.NODE_ENV === 'production'){
    pg = postgres(env.DATABSE_URL)
    database = drizzle(pg, {schema})
} else {
    if(!global.database){
        pg = postgres(env.DATABSE_URL)
        global.database = drizzle(pg, {schema})
    }
    database = global.database
}

export { database, pg }