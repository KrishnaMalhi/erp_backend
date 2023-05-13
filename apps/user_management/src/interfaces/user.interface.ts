
export interface UserInterface {
    id: number;
    channel: string;
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
    deleted_at: Date;
    role: number;
}