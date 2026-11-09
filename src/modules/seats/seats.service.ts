import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@mikro-orm/nestjs'
import { EntityRepository } from '@mikro-orm/postgresql'
import { SeatEntity } from './entities/seat.entity.js'
import { EventEntity } from '../events/entities/event.entity.js'
import { CreateSeatDto } from './dto/create-seat.dto.js'

@Injectable()
export class SeatsService {
    constructor(
        @InjectRepository(SeatEntity)
        private readonly seatRepository: EntityRepository<SeatEntity>,

        @InjectRepository(EventEntity)
        private readonly eventRepository: EntityRepository<EventEntity>,
    ) { }

    async create(eventId: string, dto: CreateSeatDto): Promise<SeatEntity> {
        const event = await this.eventRepository.findOne({ id: eventId });

        if (!event) {
            throw new NotFoundException('Event not found');
        }

        const seat = this.seatRepository.create({
            number: dto.number,
            event,
            createdAt: new Date(),
        });

        const em = this.seatRepository.getEntityManager();

        em.persist(seat);
        await em.flush();

        return seat;
    }

    async findAll(eventId: string): Promise<SeatEntity[]> {
        const event = await this.eventRepository.findOne({ id: eventId });

        if (!event) {
            throw new NotFoundException('Event not found');
        }

        return this.seatRepository.find(
            { event: { id: eventId } },
            { orderBy: { number: 'ASC' } }
        );
    }
}