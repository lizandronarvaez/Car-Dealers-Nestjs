import { IsString, MinLength } from 'class-validator';
export class CreateBrandDto {

    @IsString()
    @MinLength(1)
    brand:string;
}
