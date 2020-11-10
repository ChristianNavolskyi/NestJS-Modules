import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type DogDocument = Dog & Document

@Schema()
export class Dog extends Document {
  @Prop({ required: true, index: true })
  readonly name: string
}

export const DogSchema = SchemaFactory.createForClass(Dog)
