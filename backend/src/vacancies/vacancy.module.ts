import { Module } from '@nestjs/common';
import { Vacancies } from '../interfaces/entities/Vacancies';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { Emails } from '../interfaces/entities/Emails';
import { JwtService } from '@nestjs/jwt';

@Module({
	imports: [TypeOrmModule.forFeature([Vacancies, Emails])],
	providers: [VacancyService, JwtService],
	controllers: [VacancyController],
})
export class VacancyModule {}
