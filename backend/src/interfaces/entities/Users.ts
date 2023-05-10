import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enums/role.enum';

@Entity()
export class Users extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column({
		type: 'enum',
		enum: UserRole,
		default: UserRole.User,
	})
	role: UserRole;
}
