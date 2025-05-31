import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  phone: string;
}
