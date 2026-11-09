import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';

import { EventEntity } from './entities/event.entity.js';
import { CreateEventDto } from './dto/create-event.dto.js';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(EventEntity)
        private readonly eventRepository: EntityRepository<EventEntity>,
    ) { }

    async create(createEventDto: CreateEventDto): Promise<EventEntity> {
        const event = this.eventRepository.create({
            name: createEventDto.name,
            description: createEventDto.description,
            startsAt: new Date(createEventDto.startsAt),
            createdAt: new Date(),
        });

        await this.eventRepository.getEntityManager().persist(event);
        await this.eventRepository.getEntityManager().flush();

        return event;
    }

    async findAll(): Promise<EventEntity[]> {
        return this.eventRepository.find(
            {},
            {
                orderBy: { createdAt: 'DESC' },
            },
        );
    }

    async findOne(id: string): Promise<EventEntity> {
        const event = await this.eventRepository.findOne({ id });

        if (!event) {
            throw new NotFoundException('Event not found');
        }

        return event;
    }
}