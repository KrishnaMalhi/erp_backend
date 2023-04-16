import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose";

export type PermissionsDocument = Permissions & Document;

@Schema()
export class Permissions {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    type: string;

    @Prop()
    parent_id: string;

    @Prop()
    page_url: string;

    @Prop()
    menu_label: string;

    @Prop()
    label: string;

    @Prop()
    create: boolean;

    @Prop()
    read: boolean;

    @Prop()
    write: boolean;

    @Prop()
    update: boolean;

    @Prop()
    is_verified: boolean;

    @Prop()
    is_active: boolean;

    @Prop()
    created_by: string;

    @Prop({ type: Date, default: Date.now })
    created_at: Date;

    @Prop({ type: Date, default: Date.now })
    updated_at: Date;

    @Prop({ type: Date, default: Date.now })
    deleted_at: Date;

    @Prop()
    last_modified_by: string;
}
export const PermissionsSchema = SchemaFactory.createForClass(Permissions)