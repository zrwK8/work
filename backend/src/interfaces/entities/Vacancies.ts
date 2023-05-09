import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
     occupying: string;

     @Column()
     description: string;

     @Column()
     salary: number;
}






