import { HttpResponseCode, HttpResponseMessage, sendResponse, sendError } from '@app/common/utils/response.utils';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
    ParseIntPipe,
    Query
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoleService } from '../services/role.service';
import { CreateRoleDto, UpdateRoleDto } from '../dto/role.dto';


@ApiTags('roles')
@Controller('roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }

    @Get("/getAll")
    @UsePipes(ValidationPipe)
    async findAll() {

        try {
            const response = await this.roleService.findAll();
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            console.log(error)
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/getById')
    async findById(@Query('id', ParseIntPipe) id: number) {
        try {
            const response = await this.roleService.findById(id);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Post("/create")
    async create(@Body() createRoleDto: CreateRoleDto) {
        try {
            const response = await this.roleService.create(createRoleDto);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('/updateById')
    async update(
        @Query('id', ParseIntPipe) id: number,
        @Body() updateRoleDto: UpdateRoleDto,
    ) {
        try {
            const response = await this.roleService.update(id, updateRoleDto);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('/deleteById')
    async delete(@Query('id', ParseIntPipe) id: number) {
        try {
            const response = await this.roleService.delete(id);
            if (response.affected === 0) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('/assignPermissions')
    async assignPermissionToRole(
        @Query('roleId', ParseIntPipe) roleId: number,
        @Query('permissionId', ParseIntPipe) permissionId: number,
    ) {
        try {
            const response = await this.roleService.assignPermissionToRole(roleId, permissionId);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('/deletePermissions')
    async removePermissionsFromRole(
        @Query('roleId', ParseIntPipe) roleId: number,
        @Query('permissionId', ParseIntPipe) permissionId: number,
    ) {
        try {
            const response = await this.roleService.removePermissionFromRole(roleId, permissionId);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }
}