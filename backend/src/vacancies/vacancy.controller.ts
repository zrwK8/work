import { Body, Controller, Delete, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { CreateVacancyDto, UpdateVacancyDto } from '../interfaces/dto/vacancies.dto';
import { Vacancies } from '../interfaces/entities/Vacancies';
import { DeleteResult, UpdateResult } from 'typeorm';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../interfaces/enums/role.enum';

@Controller('vacancies')
export class VacancyController {
	constructor(private readonly vacancyService: VacancyService) {}

	@Get('/')
	public async getVacancies(): Promise<Vacancies[]> {
		try {

			return await this.vacancyService.getVacancies();
		} catch (error) {
			throw new NotFoundException('No vacancies found');
		}
	}

	@Get('/:id')
	public async getVacancy(@Param('id') id: number): Promise<Vacancies> {
		return await this.vacancyService.getVacancy(id);
	}

	@Post('/create-vacancy')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRole.Superadmin, UserRole.Admin, UserRole.Employer)
	public async createVacancy(@Body() vacanciesDto: CreateVacancyDto): Promise<CreateVacancyDto> {
		return await this.vacancyService.createVacancy(vacanciesDto);
	}

	@Post('/update-vacancy')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRole.Superadmin, UserRole.Admin, UserRole.Employer)
	public async updateVacancy(@Body() vacanciesDto: UpdateVacancyDto): Promise<UpdateResult> {
		return await this.vacancyService.updateVacancy(vacanciesDto.id, vacanciesDto);
	}

	@Delete('/delete-vacancy')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRole.Superadmin, UserRole.Admin, UserRole.Employer)
	public async deleteVacancy(id: number): Promise<DeleteResult> {
		return await this.vacancyService.deleteVacancy(id);
	}
}
