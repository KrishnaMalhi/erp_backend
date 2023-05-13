import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Permission } from '../entities/permission.entity';
import { CreatePermissionDto, UpdatePermissionDto } from '../dto/permissions.dto';

@Injectable()
export class PermissionService {
    constructor(
        @InjectRepository(Permission)
        private readonly permissionRepository: Repository<Permission>,
    ) { }

    async findAll(): Promise<Permission[]> {
        return await this.permissionRepository.find();
    }

    async findById(id: number): Promise<Permission> {
        const permission = await this.permissionRepository.findOne({ where: { id } });
        // if (!permission) {
        //     throw new NotFoundException(`Permission with ID ${id} not found`);
        // }
        return permission;
    }

    async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
        return await this.permissionRepository.save(createPermissionDto)
    }

    async update(id: number, updatedPermissionDto: UpdatePermissionDto): Promise<Permission> {
        const permission = await this.permissionRepository.findOne({ where: { id } });
        if (!permission) {
            throw new Error("NOT_FOUND")
        }
        return await this.permissionRepository.save({
            id: permission.id,
            ...updatedPermissionDto,
        });
        // const permission = await this.permissionRepository.preload({
        //     id,
        //     ...updatedPermissionDto,
        // });
        // // if (!permission) {
        // //     throw new NotFoundException(`Permission with ID ${id} not found`);
        // // }
        // return await this.permissionRepository.save(permission);
    }
    // : Promise<Permission>
    async delete(id: number) {
        const result = await this.permissionRepository.delete(id);
        return result;
        // if (result.affected === 0) {
        //     throw new NotFoundException(`Permission with ID ${id} not found`);
        // }
    }
}
