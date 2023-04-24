import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from "../entities/role.entity";
import { RoleService } from "../services/role.service";
import { RoleController } from "../controllers/role.controller";
import { Permission } from "../entities/permission.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Role, Permission])],
    controllers: [RoleController],
    providers: [RoleService]
})
export class RoleModule { }