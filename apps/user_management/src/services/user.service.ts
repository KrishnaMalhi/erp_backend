import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm'
import { AuthenticateUserDto, CreateUserDto, ResetPasswordDto, UpdateUserDto } from "../dto/user.dto";
import { User } from "../entities/user.entity";
import { Role } from "../entities/role.entity";
import { bcryptEncryption, bcryptEncryptionComparision } from '../utils/common.utils';




@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({
            relations: ['role'],
        });
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id }, relations: ['role'] });
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({ where: { email }, relations: ['role'] });
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcryptEncryption(createUserDto.password);
        createUserDto.password = hashedPassword;
        return await this.userRepository.save(createUserDto);
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.preload({
            id,
            ...updateUserDto,
        });
        return await this.userRepository.save(user);
    }

    async delete(id: number) {
        return await this.userRepository.delete(id);
    }

    async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<User> {
        const user = await this.userRepository.findOne({ where: { email: resetPasswordDto.email } });
        if (!user) {
            return user;
        }
        const hashedPassword = await bcryptEncryption(resetPasswordDto.password);
        user.password = hashedPassword;
        return await this.userRepository.save(user);
    }

    async authenticateUser(authenticateUserDto: AuthenticateUserDto): Promise<User | Boolean> {
        const user = await this.userRepository.findOne({ where: { email: authenticateUserDto.email } });
        if (!user) {
            throw new NotFoundException("Invalid username or password")
            return false;
        }
        const comparePass = await bcryptEncryptionComparision(authenticateUserDto.password, user.password)
        if (!comparePass) {
            throw new NotFoundException("Invalid username or password")
            return false
        }
        return user;
    }

    async assignRoleToUser(userId: number, roleId: number): Promise<User | Role> {
        const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['role'] });
        if (!user) {
            return user
        }
        const role = await this.roleRepository.findOne({ where: { id: roleId } });
        if (!role) {
            return role
        }
        const assignedRole = await new Role()
        assignedRole.id = roleId;
        const id = assignedRole
        user.role = id

        return await this.userRepository.save(user);
    }

    async removeRoleFromUser(userId: number, roleId: number): Promise<User | Role> {
        const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['role'] });
        if (!user) {
            return user
        }
        const role = await this.roleRepository.findOne({ where: { id: roleId } });
        if (!role) {
            return role
        }
        user.role = null;

        return this.userRepository.save(user);
    }
}