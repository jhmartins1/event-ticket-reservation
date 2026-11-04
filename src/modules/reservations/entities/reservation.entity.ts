
import { randomUUID } from 'node:crypto';
import {
    Entity,
    PrimaryKey,
    Property,
    ManyToOne,
    Enum,
} from '@mikro-orm/decorators/legacy';

import { SeatEntity } from '../../seats/entities/seat.entity.js';
import { ReservationStatus } from '../enums/reservation-status.enum.js';

@Entity({ tableName: 'reservations' })
export class ReservationEntity {
    @PrimaryKey({ type: 'uuid' })
    id: string = randomUUID();

    @Property({ type: 'uuid' })
    userId!: string;

    @ManyToOne(() => SeatEntity)
    seat!: SeatEntity;

    @Enum({ items: () => ReservationStatus })
    status: ReservationStatus = ReservationStatus.PENDING;

    @Property({ type: 'datetime' })
    expiresAt!: Date;

    @Property({ type: 'datetime' })
    createdAt: Date = new Date();
}
