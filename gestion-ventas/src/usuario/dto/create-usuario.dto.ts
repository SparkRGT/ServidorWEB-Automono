import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsIn(['agente', 'supervisor'])
  rol: 'agente' | 'supervisor';

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
