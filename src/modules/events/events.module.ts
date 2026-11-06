import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { EventEntity } from './entities/event.entity.js';
import { EventsController } from './events.controller.js';
import { EventsService } from './events.service.js';

@Module({
    imports: [MikroOrmModule.forFeature([EventEntity])],
    controllers: [EventsController],
    providers: [EventsService],
})
export class EventsModule { }