import { Body, Controller, Delete, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../interfaces/enums/role.enum';
import { UsersService } from './users.service';
import { UpdateResult, DeleteResult } from 'typeorm';
import { UsersDto } from '../interfaces/dto/users.dto';
import { Users } from '../interfaces/entities/Users';

@Roles(UserRole.Admin, UserRole.Superadmin)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('/')
	public async getUsers(): Promise<Users[]> {
		return await this.usersService.getUsers();
	}

	@Get('/:id')
	public async getUser(@Param('id') id: number): Promise<Users> {
		return await this.usersService.getUser(id);
	}

	@Patch('/update')
	@Roles(UserRole.Superadmin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	public async updateUserRole(@Body() updateUserDto: UsersDto): Promise<UpdateResult> {
		return await this.usersService.updateUserRole(updateUserDto);
	}

	@Delete('/delete/:id')
	@Roles(UserRole.Superadmin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	public async deleteUser(@Param('id') id: number): Promise<DeleteResult> {
		return await this.usersService.deleteUser(id);
	}
}
