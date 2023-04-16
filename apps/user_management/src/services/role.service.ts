import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from '../schemas/role.schema';
import { CreateRoleDto, UpdateRoleDto } from '../dto/role.dto';

@Injectable()
export class RoleService {
    constructor(@InjectModel("Role") private roleModel: Model<Role>) { }

    async create(createRoleDto: CreateRoleDto): Promise<Role> {
        const createdRole = new this.roleModel(createRoleDto);
        return createdRole.save();
    }

    async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
        const updatedRole = await this.roleModel.findByIdAndUpdate(id, updateRoleDto, { new: true }).exec();
        if (!updatedRole) {
            throw new NotFoundException('Role not found');
        }
        return updatedRole;
    }

    async get(id: string): Promise<Role> {
        const role = await this.roleModel.findById(id).exec();
        if (!role) {
            throw new NotFoundException('Role not found');
        }
        return role;
    }

    async delete(id: string): Promise<void> {
        const result = await this.roleModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Role not found');
        }
    }

    async assignPermissions(roleId: string, permissionIds: string[]): Promise<Role> {
        const role = await this.roleModel.findById(roleId).exec();
        if (!role) {
            throw new NotFoundException('Role not found');
        }
        role.permissions = permissionIds;
        return role.save();
    }
}
