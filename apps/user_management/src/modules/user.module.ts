import { Module } from "@nestjs/common";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from "../entities/role.entity";


@Module({
    imports: [TypeOrmModule.forFeature([User, Role])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule { }