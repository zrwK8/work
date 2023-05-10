import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './configs/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VacancyModule } from './vacancies/vacancy.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		VacancyModule,
		AuthModule,
		UsersModule,
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useClass: TypeOrmConfig,
		}),
	],
})
export class AppModule {}
