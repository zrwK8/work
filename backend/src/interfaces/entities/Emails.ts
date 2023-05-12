import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Emails extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	email: string;
}
