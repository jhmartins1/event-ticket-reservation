import { Migration } from '@mikro-orm/migrations';

export class Migration20261104205319_create_reservations extends Migration {

  override name = 'Migration20261104205319_create_reservations';

  override up(): void | Promise<void> {
    this.addSql(`create table "reservations" ("id" uuid not null, "user_id" uuid not null, "seat_id" uuid not null, "status" text not null default 'PENDING', "expires_at" timestamptz not null, "created_at" timestamptz not null, primary key ("id"));`);

    this.addSql(`alter table "reservations" add constraint "reservations_seat_id_foreign" foreign key ("seat_id") references "seats" ("id");`);
    this.addSql(`alter table "reservations" add constraint "reservations_status_check" check ("status" in ('PENDING', 'CONFIRMED', 'CANCELLED', 'EXPIRED'));`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "reservations" cascade;`);
  }

}
