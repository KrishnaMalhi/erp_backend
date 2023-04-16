import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { Role } from '../schemas/role.schema';
import { CreateRoleDto, DeleteRoleDto, GetRoleDto, UpdateRoleDto } from '../dto/role.dto';
import { RoleService } from '../services/role.service';

@ApiTags('roles')
@Controller('roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }

    @Post()
    @ApiResponse({ status: 201, type: Role })
    @ApiBadRequestResponse({ description: 'Invalid data provided' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
        return this.roleService.create(createRoleDto);
    }

    @Put(':id')
    @ApiResponse({ status: 200, type: Role })
    @ApiNotFoundResponse({ description: 'Role not found' })
    @ApiBadRequestResponse({ description: 'Invalid data provided' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    update(@Param() getRoleDto: GetRoleDto, @Body() updateRoleDto: UpdateRoleDto): Promise<Role> {
        return this.roleService.update(getRoleDto.id, updateRoleDto);
    }

    @Get(':id')
    @ApiResponse({ status: 200, type: Role })
    @ApiNotFoundResponse({ description: 'Role not found' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    get(@Param() getRoleDto: GetRoleDto): Promise<Role> {
        return this.roleService.get(getRoleDto.id);
    }

    @Delete(':id')
    @ApiResponse({ status: 200 })
    @ApiNotFoundResponse({ description: 'Role not found' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    delete(@Param() deleteRoleDto: DeleteRoleDto): Promise<void> {
        return this.roleService.delete(deleteRoleDto.id);
    }
}