import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column({ nullable: true, default: false })
  isNew?: boolean;

  constructor(name: string, cpf: string, isNew?: boolean) {
    this.name = name;
    this.cpf = cpf;
    this.isNew = isNew;
  }
}
