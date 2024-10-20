import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ResortEntity from "./ResortEntity";

@Entity()
export default class RoomEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  roomNumber: string;

  @Column()
  isBooked: boolean;

  @Column()
  dtEntry: Date;

  @Column()
  dtDeparture: Date;

  @Column()
  isCleared: boolean;

  @ManyToOne(() => ResortEntity, (resort) => resort.rooms, { nullable: true })
  resort!: ResortEntity;

  constructor(
    roomNumber: string,
    isBooked: boolean,
    dtEntry: Date,
    dtDeparture: Date,
    isCleared: boolean
  ) {
    this.roomNumber = roomNumber;
    this.isBooked = isBooked;
    this.dtEntry = dtEntry;
    this.dtDeparture = dtDeparture;
    this.isCleared = isCleared;
  }
}
