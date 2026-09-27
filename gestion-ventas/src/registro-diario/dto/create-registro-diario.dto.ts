
import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateRegistroDiarioDto {



  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsNumber()
  @IsNotEmpty()
  totalVentas: number;

  @IsString()
  @IsNotEmpty()
  descripcionVentas: string;
  
  @IsNumber()
  @IsNotEmpty()
  totalGastos: number;

  @IsString()
  @IsNotEmpty()
  descripcionGastos: string;

  @IsString()
  @IsNotEmpty()
  observacion: string;

  @IsNumber()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  id_agente: number;
}
