import { Request, Response } from "express";
import ResortEntity from "../Entities/ResortEntity";
import ResortRepository from "../Repositories/ResortRepository";

export default class ResortController {
  constructor(private repository: ResortRepository) {}

  async createResort(req: Request, res: Response) {
    const { name, capacity } = <ResortEntity>req.body;

    const newResort: ResortEntity = new ResortEntity(name, capacity);

    await this.repository.createResort(newResort);
  }
}
