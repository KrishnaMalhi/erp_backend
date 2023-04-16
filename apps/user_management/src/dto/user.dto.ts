import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString } from "class-validator"
// import { Role } from "../schemas/role.schema";


export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    mobile_number: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail({}, { message: "Please enter correct email" })
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    institute_id: string;

    @ApiProperty()
    roles: string;
}

export class UpdateUserDto {
    @ApiProperty()
    // @IsNotEmpty()
    @IsString()
    first_name?: string;

    @ApiProperty()
    // @IsNotEmpty()
    @IsString()
    last_name?: string;

    @ApiProperty()
    // @IsNotEmpty()
    @IsString()
    mobile_number?: string;

    @ApiProperty()
    // @IsNotEmpty()
    @IsString()
    username?: string;

    @ApiProperty()
    // @IsNotEmpty()
    @IsString()
    @IsEmail({}, { message: "Please enter correct email" })
    email?: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // password: string;

    @ApiProperty()
    // @IsNotEmpty()
    @IsString()
    institute_id?: string;

    @ApiProperty()
    roles?: string;
}

export class getUserByEmailIdMobileInstitute {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    _id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    mobile_number: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail({}, { message: "Please enter correct email" })
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    institute_id: string;
}

export class GetUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;
}

export class DeleteUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;
}

export class findAllUsersDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    _id: String;

    @ApiProperty()
    @IsOptional()
    @IsString()
    role: String;
}
