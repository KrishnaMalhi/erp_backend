import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionController } from "../controllers/permission.controller";
import { PermissionService } from "../services/permission.service";
import { Permission } from "../entities/permission.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Permission])],
    controllers: [PermissionController],
    providers: [PermissionService]
})
export class PermissionsModule { }