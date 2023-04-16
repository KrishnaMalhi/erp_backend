import { Module } from '@nestjs/common';
import { UserManagementController } from './user_management.controller';
import { UserManagementService } from './user_management.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule, RmqModule } from '@app/common';
import { UserModule } from './modules/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleModule } from './modules/role.module';
import { PermissionsModule } from './modules/permission.module';
// import { logger } from './utils/logger.utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/user_management/.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    DatabaseModule,
    RmqModule,
    UserModule,
    RoleModule,
    PermissionsModule
  ],
  // controllers: [UserManagementController],
  // providers: [UserManagementService],
})
export class UserManagementModule { }
