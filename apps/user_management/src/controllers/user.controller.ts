import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, Req, Res } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { logger } from "../utils/logger.utils";
import { CreateUserDto, DeleteUserDto, GetUserDto, UpdateUserDto, findAllUsersDto } from "../dto/user.dto";
import { sendError, sendResponse } from "../utils/response.utils";
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "../schemas/user.schema";
import { MessagePattern } from "@nestjs/microservices";


@ApiTags('users')
@Controller("users")
export class UserController {

    constructor(private userService: UserService) { }

    // @Post()
    @MessagePattern("createUser")
    @ApiResponse({ status: 201, type: User })
    @ApiBadRequestResponse({ description: 'Invalid data provided' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    create(createUserDto: CreateUserDto): Promise<User> {
        console.log("user management cont: ", createUserDto)
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    @ApiResponse({ status: 200, type: User })
    @ApiNotFoundResponse({ description: 'User not found' })
    @ApiBadRequestResponse({ description: 'Invalid data provided' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    update(@Param() getUserDto: GetUserDto, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userService.update(getUserDto.id, updateUserDto);
    }

    @Get(':id')
    @ApiResponse({ status: 200, type: User })
    @ApiNotFoundResponse({ description: 'User not found' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    get(@Param() getUserDto: GetUserDto): Promise<User> {
        return this.userService.get(getUserDto.id);
    }

    @Delete(':id')
    @ApiResponse({ status: 200 })
    @ApiNotFoundResponse({ description: 'User not found' })
    @ApiInternalServerErrorResponse({ description: 'Server error occurred' })
    delete(@Param() deleteUserDto: DeleteUserDto): Promise<void> {
        return this.userService.delete(deleteUserDto.id);
    }

    @Get("getAllUsers")
    async findAllUsers(@Query() findAllUsersDto: findAllUsersDto, @Res() res: Response, @Req() req: Request) {
        try {
            logger.log("IN - findAllUsers controller!")
            // console.log(req)
            const response = await this.userService.findAllUsers(findAllUsersDto)
            logger.log("OUT - findAllUsers controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            logger.error(`ERROR - findAllUsers controller - ${error.message}`)
            return sendError(res, req, {}, error, 500);
            // throw new Error(`ERROR - findAllUsers findAllUsers controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}