import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PermissionDocument = Permission & Document;

@Schema({ timestamps: true, versionKey: false, id: false })
export class Permission {
  @Prop({ type: String })
  label: string;
  @Prop({ type: String, required: true })
  subject: string;
  @Prop({ type: [String], required: true })
  action: string[];
  @Prop({ type: String })
  condition: string;
  @Prop({ type: Number })
  order: number;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
