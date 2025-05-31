import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(dto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create({
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
    });
    const user = await this.userRepository.save(newUser);
    return user;
  }
  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.name = dto.name;
    user.email = dto.email;
    user.phone = dto.phone;
    const updatedUser = await this.userRepository.save(user);
    return updatedUser;
  }
  async delete(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.remove(user);
    return;
  }
}
