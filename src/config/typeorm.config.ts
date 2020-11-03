import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
     type: "postgres",
     host: "localhost",
     password: "postgress",
     username: 'postgress',
     database: 'nest_task',
     entities: [__dirname + "/../**/*.entity.ts"],
     synchronize: true

}
