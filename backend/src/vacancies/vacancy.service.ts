import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateVacancyDto, UpdateVacancyDto } from '../interfaces/dto/vacancies.dto';
import { Vacancies } from '../interfaces/entities/Vacancies';
import { Emails } from '../interfaces/entities/Emails';

@Injectable()
export class VacancyService {
	constructor(
		@InjectRepository(Vacancies)
		private readonly vacanciesRepository: Repository<Vacancies>,
		@InjectRepository(Emails) private readonly emailsRepository: Repository<Emails>,
	) {}

	public async getVacancies(): Promise<Vacancies[]> {
		return await this.vacanciesRepository.find();
	}

	public async getVacancy(nameSurname: string, age: number): Promise<Vacancies> {
		return await this.vacanciesRepository.findOneBy({ nameSurname: nameSurname, age: age });
	}

	public async subscribeToVacancies(email: string): Promise<Emails> {
		const subscribed = await this.emailsRepository.findOneBy({ email });
		if (subscribed) {
			throw new BadRequestException();
		}
		return await this.emailsRepository.save({ email });
	}

	public async createVacancy(vacancy: CreateVacancyDto) {
		return await this.vacanciesRepository.save({ ...vacancy });
	}

	public async updateVacancy(id: number, vacancy: UpdateVacancyDto): Promise<UpdateResult> {
		return await this.vacanciesRepository.update(id, vacancy);
	}

	public async deleteVacancy(id: number): Promise<DeleteResult> {
		return await this.vacanciesRepository.delete(id);
	}
}
