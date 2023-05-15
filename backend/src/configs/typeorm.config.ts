import { Injectable } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Vacancies } from '../interfaces/entities/Vacancies';
import { Users } from '../interfaces/entities/Users';
import { Emails } from '../interfaces/entities/Emails';
import { WorkType } from '../interfaces/entities/WorkType';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
	constructor(private readonly configService: ConfigService) {}

	createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
		return {
			type: 'postgres',
			host: this.configService.get('POSTGRES_HOST'),
			port: this.configService.get('POSTGRES_PORT'),
			username: this.configService.get('POSTGRES_USERNAME'),
			password: this.configService.get('POSTGRES_PASSWORD'),
			database: this.configService.get('POSTGRES_DATABASE'),
			synchronize: true,
			logging: true,
			entities: [Vacancies, Users, Emails, WorkType],
			subscribers: [],
			migrations: [],
		};
	}
}
