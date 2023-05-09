import { Module } from '@nestjs/common';
import { Vacancies } from '../interfaces/entities/Vacancies';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';

@Module({
     imports: [TypeOrmModule.forFeature([Vacancies])],
     providers: [VacancyService],
     controllers: [VacancyController],
})
export class VacancyModule {}
