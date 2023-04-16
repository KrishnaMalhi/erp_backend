import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RoleSchema } from "../schemas/role.schema";
import { RoleController } from "../controllers/role.controller";
import { RoleService } from "../services/role.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Role', schema: RoleSchema }])],
    controllers: [RoleController],
    providers: [RoleService]
})
export class RoleModule { }