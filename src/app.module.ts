import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import mikroOrmConfig from '../mikro-orm.config.js';
import { EventsModule } from './modules/events/events.module.js';
import { SeatsModule } from './modules/seats/seats.module.js';
import { ReservationsModule } from './modules/reservations/reservations.module.js';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    EventsModule,
    SeatsModule,
    ReservationsModule,
  ],
})
export class AppModule { }