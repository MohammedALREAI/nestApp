import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class User extends BaseEntity {



     @PrimaryGeneratedColumn()
     readonly id: string





     @Column()
     username: string
     @Column()
     password: string



}



// we need to create repostory 
