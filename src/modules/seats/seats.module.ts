import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SeatEntity } from './entities/seat.entity.js';

@Module({
    imports: [MikroOrmModule.forFeature([SeatEntity])],
})
export class SeatsModule { }