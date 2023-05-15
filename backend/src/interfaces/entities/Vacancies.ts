import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WorkType } from './WorkType';

// @Entity()
// export class VacanciesOld extends BaseEntity {
// 	@PrimaryGeneratedColumn()
// 	id: number;

// 	@Column()
// 	image: string;

// 	@Column()
// 	nameSurname: string;

// 	@Column()
// 	age: number;

// 	@Column()
// 	position: string;

// 	@Column()
// 	occupying: string;

// 	@Column()
// 	description: string;

// 	@Column()
// 	salary: number;
// }

@Entity()
export class Vacancies extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	image: string;

	@Column()
	nameSurname: string;

	@Column()
	age: number;

	@Column()
	position: string;

	@Column()
	workExperience: number;

	@Column()
	country: string;

	@Column()
	city: string;

	@Column()
	salary: number;

	@Column()
	description: string;

	@Column()
	skills: string;

	@OneToOne(() => WorkType, workType => workType.vacancy, { cascade: true })
	@JoinColumn()
	workType: WorkType;
}
