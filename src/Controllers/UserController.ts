import { Request, Response } from "express";
import UserEntity from "../Entities/UserEntity";
import UserRepository from "../Repositories/UserRepository";

export default class UserController {
  constructor(private repository: UserRepository) {}

  async createUser(req: Request, res: Response) {
    const { name, cpf, isNew } = <UserEntity>req.body;

    const newUser: UserEntity = new UserEntity(name, cpf, isNew);

    await this.repository.createUser(newUser);
    return res.status(201).json(newUser);
  }

  async getUsers(req: Request, res: Response) {
    const users: Array<UserEntity> = await this.repository.getUsers();

    return res.status(200).json(users);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const { success, message } = await this.repository.deleteUser(Number(id));

    if (!success) {
      return res.status(400).json({ message });
    }

    return res.status(204);
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { success, message } = await this.repository.updateUser(
      Number(id),
      req.body as UserEntity
    );

    if (!success) {
      return res.status(400).json({ message });
    }

    return res.status(204);
  }
}
