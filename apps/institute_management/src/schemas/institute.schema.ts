import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose";

export type InstituteDocument = Institute & Document;

@Schema()
export class Institute extends AbstractDocument {
    @Prop({ required: true })
    name: string;
    // @Prop()
    // subscriptionPlan: string;
    @Prop()
    slug: string;
    @Prop()
    description: string;
    @Prop()
    cover_image: Buffer;
    @Prop()
    logo: Buffer;
    @Prop()
    is_active: boolean;
    @Prop()
    address: string;
    @Prop()
    settings: string;
    @Prop()
    notifications: string;
    @Prop()
    created_at: Date;
    @Prop()
    updated_at: Date;
    // @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'Role' }] })
    // @Prop({ type: [{ type: Types.ObjectId, ref: 'Role' }] })
    // roles: Role[];

    // @Prop({ type: [{ type: Types.ObjectId, ref: 'Module' }] })
    @Prop()
    modules: string[];
}
export const InstituteSchema = SchemaFactory.createForClass(Institute)