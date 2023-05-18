import {
	BadRequestException,
	Body,
	Controller,
	HttpCode,
	Post,
	UnauthorizedException,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from '../interfaces/dto/auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@Post('register')
	public async register(@Body() createUserDto: AuthDto) {
		try {
			const oldUser = await this.authService.findUser(createUserDto.email);
			if (oldUser) {
				throw new BadRequestException('Пользователь уже зарегистрирован!');
			}
			await this.authService.createUser(createUserDto);
			return {
				statusCode: 201,
				data: null,
				message: 'Пользователь успешно зарегистрирован.',
				error: null,
			};
		} catch (error) {
			throw new BadRequestException('Что-то пошло не так.');
		}
	}

	@HttpCode(200)
	@Post('login')
	public async login(@Body() { email, password }: AuthDto) {
		try {
			const logged = await this.authService.validateUser(email, password);
			const userRole = await this.authService.findUser(email);
			return await this.authService.login(logged.email, userRole.role);
		} catch (error) {
			throw new UnauthorizedException('Пожалуйста проверьте свою почту или пароль!');
		}
	}
}
