import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RoleDocument = Role & Document;

@Schema({ timestamps: true, versionKey: false, id: false })
export class Role {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: Object, required: true })
  permission: any;
  @Prop({ type: Boolean, default: false })
  default: boolean;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
