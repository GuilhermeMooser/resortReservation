import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ResortEntity from "./ResortEntity";

@Entity()
export default class SectorEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  isBooked: boolean;

  @Column()
  dtRent: Date;

  @ManyToOne(() => ResortEntity, (resort) => resort.sectors, { nullable: true })
  resort!: ResortEntity;

  constructor(name: string, isBooked: boolean, dtRent: Date) {
    this.name = name;
    this.isBooked = isBooked;
    this.dtRent = dtRent;
  }
}
