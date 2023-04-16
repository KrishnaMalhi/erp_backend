import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose";
// import { Permissions } from "./permissions.schema";
// import { Permissions } from "./permissions.schema";

export type RoleDocument = Role & Document;

@Schema()
export class Role {
    @Prop()
    name: string;

    @Prop()
    description: string;

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

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Permissions' }] })
    permissions: string[];
}
export const RoleSchema = SchemaFactory.createForClass(Role)