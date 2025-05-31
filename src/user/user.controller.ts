import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create') // api name
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return await this.userService.create(dto);
  }
  @Get()
  async findAll(): Promise<User[]> {
    return  await this.userService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id:number) : Promise<User>{
    return await this.userService.findOne(id);
  }
}
