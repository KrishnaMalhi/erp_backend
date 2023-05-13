import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Permission } from '../entities/permission.entity'
import { Role } from '../entities/role.entity'
import { User } from '../entities/user.entity'

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {

    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'mysql',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [Permission, Role, User],
            synchronize: true,
            logging: true
        }
    }
}