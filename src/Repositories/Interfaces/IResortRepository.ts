import ResortEntity from "../../Entities/ResortEntity";

export default interface IResortRepository {
  createResort(resort: ResortEntity): Promise<ResortEntity>;
  findBy(resortsId: number[]): Promise<ResortEntity[]>;
}
