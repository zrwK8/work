import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../interfaces/entities/Users';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
     imports: [TypeOrmModule.forFeature([Users])],
     providers: [UsersService],
     controllers: [UsersController],
})
export class UsersModule {}
