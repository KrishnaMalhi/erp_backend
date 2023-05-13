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
import { CreatePermissionDto, UpdatePermissionDto } from '../dto/permissions.dto';
import { PermissionService } from '../services/permission.service';


@ApiTags('permissions')
@Controller('permissions')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) { }

    @Get("/getAll")
    @UsePipes(ValidationPipe)
    async findAll() {

        try {
            const response = await this.permissionService.findAll();
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            console.log(error)
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/getById')
    async findById(@Query('id', ParseIntPipe) id: number) {
        try {
            const response = await this.permissionService.findById(id);
            console.log("response: ", response)
            if (!response) {
                throw new Error("NOT_FOUND")
                // return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            console.log(error)
            return sendError({}, HttpResponseMessage[error.message], HttpResponseCode[error.message]);
        }
    }

    @Post("/create")
    async create(@Body() createPermissionDto: CreatePermissionDto) {
        try {
            const response = await this.permissionService.create(createPermissionDto);
            console.log(response)
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage[error.message], HttpResponseCode[error.message]);
        }
    }

    @Put('/updateById')
    async update(
        @Query('id', ParseIntPipe) id: number,
        @Body() updatedPermissionDto: UpdatePermissionDto,
    ) {
        try {
            const response = await this.permissionService.update(id, updatedPermissionDto);
            console.log(response)
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage[error.message], HttpResponseCode[error.message]);
        }
    }

    @Delete('/deleteById')
    async delete(@Query('id', ParseIntPipe) id: number) {
        try {
            const response = await this.permissionService.delete(id);
            if (response.affected === 0) {
                // throw new NotFoundException(`Permission with ID ${id} not found`);
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            // if (!response) {
            // }
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }
}