import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
    process.env.TABLE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.port,
        dialect: "mysql",
        define: {
            freezeTableName: true,
        },
    }
);

export default db;

(async () => {
    await db.sync();
})();
