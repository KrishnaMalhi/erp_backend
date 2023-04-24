import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PermissionDto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'view_users' })
    name: string;

    @ApiProperty({ example: 'Permission to view user data' })
    description: string;

    @ApiProperty({ example: 'page' })
    type: string;

    @ApiProperty({ example: 2 })
    parent_id: string;

    @ApiProperty({ example: '/users' })
    page_url: string;

    @ApiProperty({ example: 'View Users' })
    menu_label: string;

    @ApiProperty({ example: 'users.view' })
    label: string;

    @ApiProperty({ example: true })
    create: boolean;

    @ApiProperty({ example: true })
    read: boolean;

    @ApiProperty({ example: false })
    write: boolean;

    @ApiProperty({ example: false })
    update: boolean;

    @ApiProperty({ example: false })
    is_verified: boolean;

    @ApiProperty({ example: true })
    is_active: boolean;

    @ApiProperty({ example: 'John Doe' })
    created_by: string;

    @ApiProperty({ example: '2022-10-01T00:00:00.000Z' })
    created_at: Date;

    @ApiProperty({ example: '2022-10-01T00:00:00.000Z' })
    updated_at: Date;

    @ApiProperty({ example: '2022-10-01T00:00:00.000Z' })
    deleted_at: Date;

    @ApiProperty({ example: 'Jane Doe' })
    last_modified_by: string;
}


export class CreatePermissionDto {
    @ApiProperty({ example: 'view_users' })
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({ example: 'Permission to view user data' })
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty({ example: 'page' })
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({ example: 2 })
    @IsString()
    @IsNotEmpty()
    parent_id: string;

    @ApiProperty({ example: '/users' })
    @IsString()
    @IsNotEmpty()
    page_url: string;


    @ApiProperty({ example: 'View Users' })
    @IsString()
    @IsNotEmpty()
    menu_label: string;


    @ApiProperty({ example: 'users.view' })
    @IsString()
    @IsNotEmpty()
    label: string;


    @ApiProperty({ example: true })
    @IsString()
    @IsNotEmpty()
    create: boolean;

    @ApiProperty({ example: true })
    @IsString()
    @IsNotEmpty()
    read: boolean;

    @ApiProperty({ example: true })
    @IsString()
    @IsNotEmpty()
    write: boolean;

    @ApiProperty({ example: true })
    @IsString()
    @IsNotEmpty()
    update: boolean;

    @ApiProperty({ example: 'Jane Doe' })
    @IsString()
    @IsNotEmpty()
    created_by: string;
    // where?: any;
    // order?: any;
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
    @IsOptional()
    @IsString()
    type?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    parent_id?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    page_url?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    menu_label?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    label?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    create?: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    read?: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    write?: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    update?: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    last_modified_by?: string;
}
