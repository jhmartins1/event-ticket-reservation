import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
} from '@nestjs/common';
import { SeatsService } from './seats.service.js'
import { CreateSeatDto } from './dto/create-seat.dto.js'

@Controller('events/:eventId/seats')
export class SeatsController {
    constructor(private readonly seatsService: SeatsService) { }

    @Post()
    create(
        @Param('eventId', ParseUUIDPipe) eventId: string,
        @Body() dto: CreateSeatDto,
    ) {
        return this.seatsService.create(eventId, dto);
    }

    @Get()
    findAll(@Param('eventId', ParseUUIDPipe) eventId: string) {
        return this.seatsService.findAll(eventId);
    }
}