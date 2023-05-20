import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateVacancyDto {
	@IsString()
	image: string;

	@IsString()
	nameSurname: string;

	@IsNumber()
	age: number;

	@IsEmail()
	email: string;

	@IsString()
	position: string;

	@IsNumber()
	workExperience: number;

	@IsString()
	country: string;

	@IsString()
	city: string;

	@IsNumber()
	salary: number;

	@IsString()
	description: string;

	@IsString({ each: true })
	workType: string[];

	@IsString({ each: true })
	skills: string[];
}

export class UpdateVacancyDto {
	id: number;
	update: CreateVacancyDto;
}


