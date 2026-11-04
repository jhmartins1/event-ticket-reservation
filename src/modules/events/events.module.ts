import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { EventEntity } from './entities/event.entity.js';

@Module({
    imports: [MikroOrmModule.forFeature([EventEntity])],
})
export class EventsModule { }