import { Repository } from "typeorm";
import ResortEntity from "../Entities/ResortEntity";
import IResortRepository from "./Interfaces/IResortRepository";

export default class ResortRepository implements IResortRepository {
  constructor(private resortRepository: Repository<ResortEntity>) {}

  async createResort(resort: ResortEntity): Promise<ResortEntity> {
    const resortCreated = await this.resortRepository.save(resort);
    return resortCreated;
  }
}
