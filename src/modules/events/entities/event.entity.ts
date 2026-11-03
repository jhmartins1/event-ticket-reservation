
import { randomUUID } from 'node:crypto';
import {
    Entity,
    PrimaryKey,
    Property,
} from '@mikro-orm/decorators/legacy';

@Entity({ tableName: 'events' })
export class EventEntity {
    @PrimaryKey({ type: 'uuid' })
    id: string = randomUUID();

    @Property({ type: 'string' })
    name!: string;

    @Property({ type: 'text', nullable: true })
    description?: string;

    @Property({ type: 'datetime' })
    startsAt!: Date;

    @Property({ type: 'datetime' })
    createdAt: Date = new Date();
}
