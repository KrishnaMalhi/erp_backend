import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PermissionsSchema } from "../schemas/permissions.schema";
import { PermissionController } from "../controllers/permission.controller";
import { PermissionService } from "../services/permission.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Permissions', schema: PermissionsSchema }])],
    controllers: [PermissionController],
    providers: [PermissionService]
})
export class PermissionsModule { }