import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class CustomerCreateDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(10)
  phone: string;

  @IsString()
  @IsNotEmpty()
  orders: string;
}
