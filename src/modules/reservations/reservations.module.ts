import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ReservationEntity } from './entities/reservation.entity.js';

@Module({
    imports: [MikroOrmModule.forFeature([ReservationEntity])],
})
export class ReservationsModule { }