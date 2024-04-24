import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeormCofig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
};

export default typeormCofig;
