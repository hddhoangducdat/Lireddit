import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constances";
import { Post } from "./entities/Post";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  user: "noir",
  password: "1",
} as Parameters<typeof MikroORM.init>[0];
