import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePermissionDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    parent_id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    page_url: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    menu_label: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    label: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    create: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    read: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    write: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    update: boolean;

    // @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    // created_by: string;
}

export class UpdatePermissionDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    parent_id?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    page_url?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    menu_label?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    label?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    create?: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    read?: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    write?: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    update?: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    created_by?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    last_modified_by?: string;
}

export class GetPermissionDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;
}

export class DeletePermissionDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;
}