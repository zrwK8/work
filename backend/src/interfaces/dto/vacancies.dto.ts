export class CreateVacancyDto {
	image: string;
	nameSurname: string;
	age: number;
	position: string;
	workExperience: number;
	country: string;
	city: string;
	salary: number;
	description: string;
	workType: string[];
	skills: string[];
}

export class UpdateVacancyDto {
	id: number;
	update: CreateVacancyDto;
}


