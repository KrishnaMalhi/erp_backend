import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose";
import { Role } from "./role.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    mobile_number: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    is_verified: boolean;

    @Prop()
    remember_token: string;

    @Prop()
    is_active: boolean;

    @Prop()
    institute_id: string;

    @Prop({ type: Date, default: Date.now })
    created_at: Date;

    @Prop({ type: Date, default: Date.now })
    updated_at: Date;

    @Prop({ type: Types.ObjectId, ref: 'Role' })
    roles: string;
}
export const UserSchema = SchemaFactory.createForClass(User)    