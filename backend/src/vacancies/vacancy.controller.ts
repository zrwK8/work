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

@Controller('vacancies')
export class VacancyController {
	constructor(private readonly vacancyService: VacancyService) {}

	@Get('/')
	public async getVacancies(): Promise<Vacancies[]> {
		try {
			return await this.vacancyService.getVacancies();
		} catch (error) {
			throw new NotFoundException('Вакансии не найдены.');
		}
	}

	@Get('/:id')
	public async getVacancy(@Param('id') id: number): Promise<Vacancies> {
		return await this.vacancyService.getVacancy(id);
	}

	@Post('/subscribe')
	@UsePipes(new ValidationPipe())
	public async subscribeToVacancies(@Body() { email }: EmailDto) {
		try {
			const subscribed = await this.vacancyService.subscribeToVacancies(email);
			return {
				statusCode: 200,
				message: 'Вы успешно подписались на рассылку. Спасибо!',
				data: subscribed,
				error: null,
			};
		} catch (error) {
			throw new BadRequestException('Что-то пошло не так. Возможно вы уже подписались на рассылку!');
		}
	}

	@Post('/create-vacancy')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRole.Superadmin, UserRole.Admin, UserRole.Employer, UserRole.User)
	public async createVacancy(@Body() vacanciesDto: CreateVacancyDto) {
		try {
			const vacancies = await this.vacancyService.createVacancy(vacanciesDto);
			return {
				statusCode: 201,
				message: 'Вы оставили свою вакансию на сайте. Спасибо!',
				data: vacancies,
				error: null,
			};
		} catch (error) {
			throw new BadRequestException('Что-то пошло не так. Проверьте правильность полей.');
		}
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
