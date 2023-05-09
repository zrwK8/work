import {
     BadRequestException,
     Body,
     Controller,
     HttpCode,
     Post,
     UsePipes,
     ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from '../interfaces/dto/auth.dto';
import { Users } from '../interfaces/entities/Users';

@Controller('auth')
export class AuthController {
     constructor(private readonly authService: AuthService) {}

     @UsePipes(new ValidationPipe())
     @Post('register')
     public async register(@Body() createUserDto: AuthDto): Promise<Users> {
          const oldUser = await this.authService.findUser(createUserDto.email);
          if (oldUser) {
               throw new BadRequestException("User already exists");
          }
          return this.authService.createUser(createUserDto);
     }

     @HttpCode(200)
     @Post('login')
     public async login(@Body() { email, password }: AuthDto): Promise<{ accessToken: string }> {
          const logged = await this.authService.validateUser(email, password);
          const userRole = await this.authService.findUser(email);
          return this.authService.login(logged.email, userRole.role);
     }
}
