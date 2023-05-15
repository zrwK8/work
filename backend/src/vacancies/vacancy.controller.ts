import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Get,
	NotFoundException,
	Param,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { CreateVacancyDto, UpdateVacancyDto } from '../interfaces/dto/vacancies.dto';
import { EmailDto } from '../interfaces/dto/email.dto';
import { Vacancies } from '../interfaces/entities/Vacancies';
import { DeleteResult, UpdateResult } from 'typeorm';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../interfaces/enums/role.enum';
import { Emails } from '../interfaces/entities/Emails';

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

	@Post('/subscribe')
	@UsePipes(new ValidationPipe())
	public async subscribeToVacancies(@Body() { email }: EmailDto): Promise<Emails> {
		try {
			return await this.vacancyService.subscribeToVacancies(email);
		} catch (error) {
			throw new BadRequestException('Email is not valid');
		}
	}

	@Post('/create-vacancy')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRole.Superadmin, UserRole.Admin, UserRole.Employer, UserRole.User)
	public async createVacancy(@Body() vacanciesDto: CreateVacancyDto): Promise<CreateVacancyDto> {
		return await this.vacancyService.createVacancy(vacanciesDto);
	}

	@Post('/update-vacancy')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRole.Superadmin, UserRole.Admin, UserRole.Employer, UserRole.User)
	public async updateVacancy(@Body() vacanciesDto: UpdateVacancyDto): Promise<UpdateResult> {
		return await this.vacancyService.updateVacancy(vacanciesDto.id, vacanciesDto);
	}

	@Delete('/delete-vacancy')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRole.Superadmin, UserRole.Admin, UserRole.Employer, UserRole.User)
	public async deleteVacancy(@Param('id') id: number): Promise<DeleteResult> {
		return await this.vacancyService.deleteVacancy(id);
	}
}
