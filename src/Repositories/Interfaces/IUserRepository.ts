import UserEntity from "../../Entities/UserEntity";

export default interface IUserRepository {
  createUser(user: UserEntity): Promise<UserEntity>;
  getUsers(): Array<UserEntity> | Promise<UserEntity[]>;
  deleteUser(id: number): Promise<{ success: boolean; message?: string }>;
  updateUser(
    id: number,
    user: UserEntity
  ): Promise<{ success: boolean; message?: string }>;
}
