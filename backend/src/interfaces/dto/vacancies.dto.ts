export class CreateVacancyDto {
	jobPosition: string;

	salary?: number;

	experience: number;

	description: string;
}

export class UpdateVacancyDto {
	id: number;

	jobPosition: string;

	salary?: number;

	experience: number;

	description: string;
}
