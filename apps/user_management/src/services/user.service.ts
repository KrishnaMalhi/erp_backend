import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { User } from "../schemas/user.schema";
import { CreateUserDto, UpdateUserDto, findAllUsersDto } from "../dto/user.dto";
import { logger } from "../utils/logger.utils";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { bcryptEncryption } from "@app/common/utils/common";




@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcryptEncryption(createUserDto.password);
        createUserDto.password = hashedPassword;
        const createdUser = await new this.userModel(createUserDto);
        return createdUser.save();
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
        if (!updatedUser) {
            throw new NotFoundException('User not found');
        }
        return updatedUser;
    }

    async get(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
    async findUserByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ email });
    }
    async delete(id: string): Promise<void> {
        const result = await this.userModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('User not found');
        }
    }

    async authenticate(email: string, password: string): Promise<User> {
        const user = await this.userModel.findOne({ email, password }).exec();
        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }
        return user;
    }

    async assignRole(userId: string, roleId: string): Promise<User> {
        const user = await this.userModel.findById(userId).exec();
        if (!user) {
            throw new NotFoundException('User not found');
        }
        user.roles = roleId;
        return user.save();
    }

    async findAllUsers(findAllUsersDto: findAllUsersDto) {
        const { _id, role } = findAllUsersDto
        try {
            logger.log("IN - findAllUsers service!")

            logger.log("_id: ", _id)
            const isSuperUser = await this.userModel.findOne({ _id, role })

            if (!isSuperUser) {
                throw new Error(`ERROR - findAllUsers database query - ${isSuperUser}`)
            }

            const response = await this.userModel.find()
            logger.log("response: ", response)


            logger.log("OUT - findAllUsers service!")

            return response
        } catch (error) {
            logger.error(`ERROR - findAllUsers service - ${error.message}`)
            throw new Error(`ERROR - findAllUsers service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}