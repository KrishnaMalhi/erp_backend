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
import { ApiTags } from "@nestjs/swagger";
import { AuthenticateUserDto, CreateUserDto, ResetPasswordDto, UpdateUserDto } from "../dto/user.dto";
import { UserService } from "../services/user.service";
import { MessagePattern } from '@nestjs/microservices';


@ApiTags('users')
@Controller("users")
export class UserController {

    constructor(private userService: UserService) { }

    @Get("/getAll")
    @UsePipes(ValidationPipe)
    async findAll() {

        try {
            const response = await this.userService.findAll();
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            console.log(error)
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/getById')
    async findById(@Query('id', ParseIntPipe) id: number) {
        try {
            const response = await this.userService.findById(id);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @MessagePattern("auth.verifyCredentials")
    @Get('/getByEmail')
    async findByEmail(@Query('email') email: string) {
        try {
            const response = await this.userService.findByEmail(email);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @MessagePattern("createUser")
    @Post("/create")
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            const response = await this.userService.create(createUserDto);
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
        @Body() updateUserDto: UpdateUserDto,
    ) {
        try {
            const response = await this.userService.update(id, updateUserDto);
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
            const response = await this.userService.delete(id);
            if (response.affected === 0) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Post("/resetPassword")
    async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        try {
            const response = await this.userService.resetPassword(resetPasswordDto);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @MessagePattern("authenticateUser")
    @Post("/authenticate")
    async authenticateUser(@Body() authenticateUserDto: AuthenticateUserDto) {
        try {

            const response = await this.userService.authenticateUser(authenticateUserDto);
            console.log("response: ", response)
            // if (!response) {
            //     return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            // }
            return sendResponse(response, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('/assignRole')
    async assignRoleToUser(
        @Query('userId', ParseIntPipe) userId: number,
        @Query('roleId', ParseIntPipe) roleId: number,
    ) {
        try {
            const response = await this.userService.assignRoleToUser(userId, roleId);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('/deleteRole')
    async removeRoleFromUser(
        @Query('userId', ParseIntPipe) userId: number,
        @Query('roleId', ParseIntPipe) roleId: number,
    ) {
        try {
            const response = await this.userService.removeRoleFromUser(userId, roleId);
            if (!response) {
                return sendResponse(response, HttpResponseMessage.NOT_FOUND, false, HttpResponseCode.NOT_FOUND)
            }
            return sendResponse({}, HttpResponseMessage.OK, true, HttpResponseCode.OK)
        } catch (error) {
            return sendError({}, HttpResponseMessage.INTERNAL_SERVER_ERROR, HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }
}