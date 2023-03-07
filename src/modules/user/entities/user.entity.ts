import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';
export type UserDocument = User & Document;
@Schema({
  timestamps: true,
  autoIndex: true,
  toJSON: { virtuals: true },
  versionKey: false,
  id: false,
})
export class User {
  @Prop({ type: String, required: true })
  firstName: string;
  @Prop({ type: String, required: true })
  lastName: string;
  @Prop({ type: String, required: true, unique: true, lowercase: true })
  email: string;
  @Prop({ type: String, required: true })
  @Exclude()
  password: string;
  @Prop({ type: String, required: true, default: 'user' })
  role: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.virtual('fullName')
  .set(function (fullName: string) {
    const [firstName, lastName] = fullName.split(' ');
    this.set({ firstName, lastName });
  })
  .get(function () {
    return `${this.firstName} ${this.lastName}`;
  });
