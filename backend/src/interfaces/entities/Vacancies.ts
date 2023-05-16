import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vacancies extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	image?: string;

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


	@Column('text', { nullable: true, array: true })
	workType: string[];

	@Column('text', { nullable: true, array: true })
	skills: string[];
}

