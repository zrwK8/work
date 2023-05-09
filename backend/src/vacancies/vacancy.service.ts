import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateVacancyDto, UpdateVacancyDto } from '../interfaces/dto/vacancies.dto';
import { Vacancies } from '../interfaces/entities/Vacancies';

@Injectable()
export class VacancyService {
     constructor(
          @InjectRepository(Vacancies)
          private readonly vacanciesRepository: Repository<Vacancies>,
     ) {}

     public async getVacancies(): Promise<Vacancies[]> {
          return await this.vacanciesRepository.find();
     }

     public async getVacancy(id: number): Promise<Vacancies> {
          return await this.vacanciesRepository.findOneBy({ id });
     }

     public async createVacancy(vacancy: CreateVacancyDto): Promise<CreateVacancyDto> {
          return await this.vacanciesRepository.save(vacancy);
     }

     public async updateVacancy(id: number, vacancy: UpdateVacancyDto): Promise<UpdateResult> {
          return await this.vacanciesRepository.update(id, vacancy);
     }

     public async deleteVacancy(id: number): Promise<DeleteResult> {
          return await this.vacanciesRepository.delete(id);
     }
}
