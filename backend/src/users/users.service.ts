import { Injectable } from '@nestjs/common';
import { Users } from '../interfaces/entities/Users';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDto } from '../interfaces/dto/users.dto';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) {}

	public async getUsers(): Promise<Users[]> {
		return await this.usersRepository.find();
	}

	public async getUser(id: number): Promise<Users> {
		return await this.usersRepository.findOneBy({ id });
	}

	public async updateUserRole(updateUserDto: UsersDto): Promise<UpdateResult> {
		return await this.usersRepository
			.createQueryBuilder()
			.update(Users)
			.set({ role: () => updateUserDto.role })
			.where('id = :id', { id: updateUserDto.id })
			.execute();
	}

	public async deleteUser(id: number): Promise<DeleteResult> {
		return await this.usersRepository
			.createQueryBuilder()
			.delete()
			.from(Users)
			.where('id = :id', { id })
			.execute();
	}
}
