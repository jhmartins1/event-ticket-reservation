
import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { EventEntity } from './src/modules/events/entities/event.entity.js'
import { SeatEntity } from "./src/modules/seats/entities/seat.entity.js";
import { ReservationEntity } from "./src/modules/reservations/entities/reservation.entity.js";

export default defineConfig({
    host: 'localhost',
    port: 5432,
    user: 'ticket',
    password: 'ticket123',
    dbName: 'ticket_db',

    entities: [EventEntity, SeatEntity, ReservationEntity],
    entitiesTs: ['./src/**/*.entity.ts'],

    extensions: [Migrator],

    migrations: {
        path: './dist/migrations',
        pathTs: './src/migrations',
    },

    debug: true,
});
