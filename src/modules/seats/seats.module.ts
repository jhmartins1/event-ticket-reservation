import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SeatEntity } from './entities/seat.entity.js';
import { EventEntity } from '../events/entities/event.entity.js'
import { SeatsController } from './seats.controller.js';
import { SeatsService } from './seats.service.js';

@Module({
    imports: [MikroOrmModule.forFeature([SeatEntity, EventEntity])],
    controllers: [SeatsController],
    providers: [SeatsService],
})
export class SeatsModule { }