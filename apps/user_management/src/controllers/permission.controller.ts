import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { Permissions } from '../schemas/permissions.schema';
import { CreatePermissionDto, DeletePermissionDto, GetPermissionDto, UpdatePermissionDto } from '../dto/permissions.dto';
import { PermissionService } from '../services/permission.service';

@ApiTags('permissions')
@Controller('permissions')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) { }

    @Post()
    @ApiResponse({ status: 201, type: Permissions })
    @ApiBadRequestResponse({ description: 'Invalid data provided' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    create(@Body() createPermissionDto: CreatePermissionDto): Promise<Permissions> {
        return this.permissionService.create(createPermissionDto);
    }

    @Put(':id')
    @ApiResponse({ status: 200, type: Permissions })
    @ApiNotFoundResponse({ description: 'Permission not found' })
    @ApiBadRequestResponse({ description: 'Invalid data provided' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    update(@Param() getPermissionDto: GetPermissionDto, @Body() updatePermissionDto: UpdatePermissionDto): Promise<Permissions> {
        return this.permissionService.update(getPermissionDto.id, updatePermissionDto);
    }

    @Get(':id')
    @ApiResponse({ status: 200, type: Permissions })
    @ApiNotFoundResponse({ description: 'Permission not found' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    get(@Param() getPermissionDto: GetPermissionDto): Promise<Permissions> {
        return this.permissionService.get(getPermissionDto.id);
    }

    @Delete(':id')
    @ApiResponse({ status: 200 })
    @ApiNotFoundResponse({ description: 'Permission not found' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    delete(@Param() deletePermissionDto: DeletePermissionDto): Promise<void> {
        return this.permissionService.delete(deletePermissionDto.id);
    }
}

