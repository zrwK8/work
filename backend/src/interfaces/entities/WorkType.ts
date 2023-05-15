import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Vacancies } from './Vacancies';

@Entity()
export class WorkType extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	office?: string;

	@Column({ nullable: true })
	remote?: string;

	@Column({ nullable: true })
	fullTime?: string;

	@Column({ nullable: true })
	partTime?: string;

	@OneToOne(() => Vacancies, vacancy => vacancy.workType)
	vacancy: Vacancies;
}
