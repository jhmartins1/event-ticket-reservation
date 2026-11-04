
import { randomUUID } from 'node:crypto';
import {
    Entity,
    PrimaryKey,
    Property,
    ManyToOne,
} from '@mikro-orm/decorators/legacy';

import { EventEntity } from '../../events/entities/event.entity.js';

@Entity({ tableName: 'seats' })
export class SeatEntity {
    @PrimaryKey({ type: 'uuid' })
    id: string = randomUUID();

    @Property({ type: 'string' })
    number!: string;

    @ManyToOne(() => EventEntity)
    event!: EventEntity;

    @Property({ type: 'datetime' })
    createdAt: Date = new Date();
}
