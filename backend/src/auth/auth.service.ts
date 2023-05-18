import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../interfaces/entities/Users';
import { AuthDto } from '../interfaces/dto/auth.dto';
import { UserRole } from '../interfaces/enums/role.enum';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(Users) private readonly usersRepository: Repository<Users>,
		private readonly jwtService: JwtService,
	) {}

	public async createUser(createUserDto: AuthDto): Promise<Users> {
		const salt = await genSalt(10);
		const hashPassword = await hash(createUserDto.password, salt);

		return await this.usersRepository.save({
			firstName: createUserDto.firstName,
			lastName: createUserDto.lastName,
			email: createUserDto.email,
			password: hashPassword,
		});
	}

	public async findUser(email: string): Promise<Users> {
		return await this.usersRepository.findOneBy({ email });
	}

	public async validateUser(email: string, password: string): Promise<{ email: string; role: UserRole }> {
		const user = await this.findUser(email);
		if (!user) {
			throw new UnauthorizedException('Пользователь не найден.');
		}

		const decryptedPassword = await compare(password, user.password);
		if (!decryptedPassword) {
			throw new UnauthorizedException('Пароль некорректный!');
		}
		return { email: user.email, role: user.role };
	}

	public async login(email: string, role: string): Promise<{ access_token: string }> {
		const payload = { email, role };
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}
