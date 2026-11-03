import { Migration } from '@mikro-orm/migrations';

export class Migration20261102231303_create_events extends Migration {

  override name = 'Migration20261102231303_create_events';

  override up(): void | Promise<void> {
    this.addSql(`create table "events" ("id" uuid not null, "name" varchar(255) not null, "description" text null, "starts_at" timestamptz not null, "created_at" timestamptz not null, primary key ("id"));`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "events" cascade;`);
  }

}
