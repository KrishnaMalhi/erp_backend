
export interface PermissionInterface {
    id: number;
    name: string;
    description: string;
    type: string;
    parent_id: string;
    page_url: string;
    menu_label: string;
    label: string;
    create: boolean;
    read: boolean;
    write: boolean;
    update: boolean;
    is_verified: boolean;
    is_active: boolean;
    created_by: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    last_modified_by: string;
}