import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PermissionsModule } from './modules/permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeORM.config';
import { RoleModule } from './modules/role.module';
import { UserModule } from './modules/user.module';
import { RedisModule } from '@app/common/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: './apps/user_management/.env', }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule,
    RoleModule,
    PermissionsModule,
    RedisModule
  ],
})
export class UserManagementModule {
  // constructor(private dataSource: DataSource) { }
}

// ConfigModule.forRoot({
//   isGlobal: true,
//   validationSchema: Joi.object({

//     DB_HOST: Joi.string().required(),
//     DB_PORT: Joi.number().required(),
//     DB_USERNAME: Joi.string().required(),
//     // DB_PASSWORD: Joi.string(),
//     DB_NAME: Joi.string().required(),
//     SYNCHRONIZE: Joi.boolean().required()
//   }),
//   envFilePath: './apps/user_management/.env',
// }),
// MongooseModule.forRoot(process.env.MONGODB_URI),
// DatabaseModule,
// RmqModule,
  // controllers: [UserController, RoleController, PermissionController],
  // providers: [UserService, RoleService, PermissionService],