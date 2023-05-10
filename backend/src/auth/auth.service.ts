import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../interfaces/entities/Users';
import { AuthDto } from '../interfaces/dto/auth.dto';
import { CryptoConfig } from '../configs/crypto.config';
import { UserRole } from '../interfaces/enums/role.enum';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(Users) private readonly usersRepository: Repository<Users>,
		private readonly jwtService: JwtService,
		private readonly cryptoService: CryptoConfig,
	) {}

	public async createUser(createUserDto: AuthDto): Promise<Users> {
		const encrypted = this.cryptoService.encrypt(createUserDto.password);
		return await this.usersRepository.save({
			firstName: createUserDto.firstName,
			lastName: createUserDto.lastName,
			email: createUserDto.email,
			password: encrypted,
		});
	}

	public async findUser(email: string): Promise<Users> {
		return await this.usersRepository.findOneBy({ email });
	}

	public async validateUser(email: string, password: string): Promise<{ email: string; role: UserRole }> {
		const user = await this.findUser(email);
		if (!user) {
			throw new UnauthorizedException('User not found');
		}
		const decrypted = this.cryptoService.decrypt(password);
		if (!decrypted) {
			throw new UnauthorizedException('Password is incorrect');
		}
		return { email: user.email, role: user.role };
	}

	public async login(email: string, role: string): Promise<{ accessToken: string }> {
		const payload = { email, role };
		return {
			accessToken: await this.jwtService.signAsync(payload),
		};
	}
}
