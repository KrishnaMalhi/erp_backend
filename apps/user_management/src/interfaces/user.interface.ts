// import { Document } from 'mongoose';
// import { UserDocument } from '../schemas/user.schema';
// import { Role } from '../schemas/role.schema';

export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    mobile_number: string;
    username: string;
    email: string;
    password: string;
    is_verified: boolean;
    remember_token: string;
    is_active: boolean;
    institute_id: string;
    created_at: Date;
    updated_at: Date;
    role: string;
}