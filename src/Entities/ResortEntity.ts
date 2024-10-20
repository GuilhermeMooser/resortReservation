import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import SectorEntity from "./SectorEntity";
import RoomEntity from "./RoomEntity";

@Entity()
export default class ResortEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  capacity: number;

  @OneToMany(() => SectorEntity, (sector) => sector.resort, { nullable: true })
  sectors!: SectorEntity[];

  @OneToMany(() => RoomEntity, (room) => room.resort, { nullable: true })
  rooms!: RoomEntity[];

  constructor(name: string, capacity: number) {
    this.name = name;
    this.capacity = capacity;
  }
}
