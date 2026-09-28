import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRegistroDiarioDto {
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  totalVentas?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  descripcionVentas?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  totalGastos?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  descripcionGastos?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  observacion?: string;
}
