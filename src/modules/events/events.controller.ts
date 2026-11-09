import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
} from '@nestjs/common';

import { EventsService } from './events.service.js';
import { CreateEventDto } from './dto/create-event.dto.js';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Post()
    create(@Body() createEventDto: CreateEventDto) {
        return this.eventsService.create(createEventDto);
    }

    @Get()
    findAll() {
        return this.eventsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.eventsService.findOne(id);
    }
}