import { DataSource } from "typeorm";
import { Sensor } from "./entity/Sensor";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres",
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [Sensor],
  subscribers: [],
  migrations: [],
});

export const dataSource = AppDataSource;
