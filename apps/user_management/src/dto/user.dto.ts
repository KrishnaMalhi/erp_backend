import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString } from "class-validator"
// import { Role } from "../schemas/role.schema";


export class CreateUserDto {
    @ApiProperty({ example: 'Jane' })
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @ApiProperty({ example: 'Doe' })
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @ApiProperty({ example: '03363598202' })
    @IsNotEmpty()
    @IsString()
    mobile_number: string;

    @ApiProperty({ example: 'janedoe' })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: 'Janedoe@example.com' })
    @IsNotEmpty()
    @IsString()
    @IsEmail({}, { message: "Please enter correct email" })
    email: string;

    @ApiProperty({ example: 'password' })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    @IsString()
    institute_id: string;
}

export class UpdateUserDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    first_name?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    last_name?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    mobile_number?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    username?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    email?: string;
    // @IsEmail({}, { message: "Please enter correct email" })

    @ApiProperty()
    @IsOptional()
    @IsString()
    institute_id?: string;
}

export class AuthenticateUserDto {

    @ApiProperty()
    @IsEmail({}, { message: "Please enter correct email" })
    @IsNotEmpty()
    @IsString()
    email?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class ResetPasswordDto {
    @ApiProperty()
    @IsEmail({}, { message: "Please enter correct email" })
    @IsNotEmpty()
    @IsString()
    email?: string;

    @ApiProperty({ example: 'password' })
    @IsNotEmpty()
    @IsString()
    password: string;
}