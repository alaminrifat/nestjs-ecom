import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  //   @IsOptional()
  email: string;
  @IsPhoneNumber()
  phone: string;
}
