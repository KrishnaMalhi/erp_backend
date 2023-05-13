import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({ example: 'Admin' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'Role to user' })
    @IsOptional()
    @IsString()
    description: string;

    @ApiProperty({ example: 'Jane Doe' })
    @IsNotEmpty()
    @IsString()
    created_by: string;
}

export class UpdateRoleDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    last_modified_by: string;
}
