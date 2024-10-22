import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import ResortEntity from "./ResortEntity";

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

  @ManyToMany(() => ResortEntity, { nullable: true })
  @JoinTable()
  resorts!: ResortEntity[];

  constructor(name: string, cpf: string, isNew?: boolean) {
    this.name = name;
    this.cpf = cpf;
    this.isNew = isNew;
  }
}
