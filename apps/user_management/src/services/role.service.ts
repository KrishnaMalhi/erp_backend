import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Role } from '../entities/role.entity';
import { CreateRoleDto, UpdateRoleDto } from '../dto/role.dto';
import { Permission } from '../entities/permission.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
        @InjectRepository(Permission)
        private readonly permissionRepository: Repository<Permission>,
    ) { }

    async findAll(): Promise<Role[]> {
        return await this.roleRepository.find({
            relations: ['permissions'],
        });
    }

    async findById(id: number): Promise<Role> {
        const permission = await this.roleRepository.findOne({ where: { id }, relations: ['permissions'] });
        return permission;
    }

    async create(createRoleDto: CreateRoleDto): Promise<Role> {
        return await this.roleRepository.save(createRoleDto)
    }

    async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
        const role = await this.roleRepository.preload({
            id,
            ...updateRoleDto,
        });
        return await this.roleRepository.save(role);
    }

    async delete(id: number) {
        const result = await this.roleRepository.delete(id);
        return result;
    }


    async assignPermissionToRole(roleId: number, permissionId: number): Promise<Role | Permission> {
        const role = await this.roleRepository.findOne({ where: { id: roleId }, relations: ['permissions'] });
        if (!role) {
            return role
        }
        const permission = await this.permissionRepository.findOne({ where: { id: permissionId } });
        if (!permission) {
            return permission
        }
        const assignedPermission = await new Permission()
        assignedPermission.id = permissionId;
        const id = assignedPermission
        role.permissions.push(id)

        return await this.roleRepository.save(role);
    }

    async removePermissionFromRole(roleId: number, permissionId: number): Promise<Role | Permission> {
        const role = await this.roleRepository.findOne({ where: { id: roleId }, relations: ['permissions'] });
        if (!role) {
            return role
        }
        const permission = await this.permissionRepository.findOne({ where: { id: permissionId } });
        if (!permission) {
            return permission
        }
        role.permissions = role.permissions.filter(p => p.id !== permission.id);

        return this.roleRepository.save(role);
    }
}
