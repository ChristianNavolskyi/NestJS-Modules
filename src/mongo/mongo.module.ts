import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { Dog, DogSchema } from "../dog/dog.schema"
import { Mongo } from "./mongo"

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Dog.name,
        schema: DogSchema,
      },
    ]),
  ],
  providers: [Mongo],
  exports: [Mongo],
})
export class MongoModule {}
