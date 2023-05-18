import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JWTConfig } from '../configs/jwt.config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../interfaces/entities/Users';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forFeature([Users]),
		JwtModule.registerAsync({
			useFactory: JWTConfig,
			inject: [ConfigService],
			imports: [ConfigModule],
		}),
	],
	providers: [AuthService, JwtStrategy, ConfigService],
	controllers: [AuthController],
})
export class AuthModule {}
