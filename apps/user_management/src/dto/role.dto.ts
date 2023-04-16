import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
// import { Permissions } from "../schemas/permissions.schema";

export class CreateRoleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // created_by: string;
    @ApiProperty()
    permissions: string[];
}

export class UpdateRoleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsString()
    created_by?: string;

    @ApiProperty()
    permissions?: string[];
}

// export class GetAllRoles {
// }

export class GetRoleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;
}

export class DeleteRoleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;
}