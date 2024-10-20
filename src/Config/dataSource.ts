import { DataSource } from "typeorm";
import path from "path";

const entitiesPath = path.join(__dirname, "../Entities");

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/Config/database.sqlite",
  entities: [`${entitiesPath}/*`],
  synchronize: true,
});
