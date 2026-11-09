import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSeatDto {
    @IsString()
    @IsNotEmpty()
    number!: string;
}