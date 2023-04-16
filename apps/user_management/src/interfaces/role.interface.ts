// import { Document } from "mongoose";
// import { Permissions } from "../schemas/permissions.schema";

export interface IRole {
    id: string;
    name: string;
    is_verified: boolean;
    is_active: boolean;
    created_by: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    role: string[];
    last_modified_by: string;
}