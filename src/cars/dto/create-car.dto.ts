// LOs dto no cambian sus propiedades
// Siempre van a ser clases

import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}
