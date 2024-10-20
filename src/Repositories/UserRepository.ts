import { Repository } from "typeorm";
import UserEntity from "../Entities/UserEntity";
import IUserRepository from "./Interfaces/IUserRepository";

export default class UserRepository implements IUserRepository {
  private userRepository: Repository<UserEntity>;

  constructor(userRepository: Repository<UserEntity>) {
    this.userRepository = userRepository;
  }

  async createUser(user: UserEntity): Promise<UserEntity> {
    const userCreated = await this.userRepository.save(user);
    return userCreated;
  }

  async getUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async deleteUser(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const userToDelete = await this.userRepository.findOne({ where: { id } });
      if (!userToDelete) {
        return { success: false, message: "The user does not exists" };
      }

      await this.userRepository.remove(userToDelete);
      return { success: true };
    } catch (e) {
      return {
        success: false,
        message: "An error has occured.",
      };
    }
  }

  async updateUser(
    id: number,
    user: UserEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const userToUpdate = await this.userRepository.findOne({ where: { id } });

      if (!userToUpdate) {
        return { success: false, message: "The user does not exists" };
      }

      Object.assign(userToUpdate, user);
      await this.userRepository.save(userToUpdate);
      return { success: true, message: "The user was successfully updated." };
    } catch (e) {
      console.log(e);
      return { success: false, message: "An error has occured." };
    }
  }
}
