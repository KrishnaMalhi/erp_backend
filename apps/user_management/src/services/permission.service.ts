import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Permissions } from '../schemas/permissions.schema';
import { CreatePermissionDto, UpdatePermissionDto } from '../dto/permissions.dto';

@Injectable()
export class PermissionService {
    constructor(@InjectModel("Permissions") private permissionModel: Model<Permissions>) { }

    async create(createPermissionDto: CreatePermissionDto): Promise<Permissions> {
        const createdPermission = new this.permissionModel(createPermissionDto);
        return createdPermission.save();
    }

    async update(id: string, updatePermissionDto: UpdatePermissionDto): Promise<Permissions> {
        const updatedPermission = await this.permissionModel.findByIdAndUpdate(id, updatePermissionDto, { new: true }).exec();
        if (!updatedPermission) {
            throw new NotFoundException('Permission not found');
        }
        return updatedPermission;
    }

    async get(id: string): Promise<Permissions> {
        const permission = await this.permissionModel.findById(id).exec();
        if (!permission) {
            throw new NotFoundException('Permission not found');
        }
        return permission;
    }

    async delete(id: string): Promise<void> {
        const result = await this.permissionModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Permission not found');
        }
    }
}