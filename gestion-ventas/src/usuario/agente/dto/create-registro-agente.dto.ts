import { IsDateString, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateRegistroAgenteDto {
  @IsDateString()
  fecha: string;

  @IsNumber()
  @Min(0)
  totalVentas: number;

  @IsString()
  @IsNotEmpty()
  descripcionVentas: string;

  @IsNumber()
  @Min(0)
  totalGastos: number;

  @IsString()
  @IsNotEmpty()
  descripcionGastos: string;

  @IsString()
  observacion: string;
}