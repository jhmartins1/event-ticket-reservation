import { Migration } from '@mikro-orm/migrations';

export class Migration20261104202655_create_seats extends Migration {

  override name = 'Migration20261104202655_create_seats';

  override up(): void | Promise<void> {
    this.addSql(`create table "seats" ("id" uuid not null, "number" varchar(255) not null, "event_id" uuid not null, "created_at" timestamptz not null, primary key ("id"));`);

    this.addSql(`alter table "seats" add constraint "seats_event_id_foreign" foreign key ("event_id") references "events" ("id");`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "seats" cascade;`);
  }

}
