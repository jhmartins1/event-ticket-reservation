
import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { EventEntity } from './src/modules/events/entities/event.entity.js'

export default defineConfig({
    host: 'localhost',
    port: 5432,
    user: 'ticket',
    password: 'ticket123',
    dbName: 'ticket_db',

    entities: [EventEntity],
    entitiesTs: ['./src/**/*.entity.ts'],

    extensions: [Migrator],

    migrations: {
        path: './dist/migrations',
        pathTs: './src/migrations',
    },

    debug: true,
});
