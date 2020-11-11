import { Module } from "@nestjs/common"
import { DogController } from "./dog.controller"
import { MongoModule } from "../mongo/mongo.module"

@Module({
  imports: [MongoModule],
  controllers: [DogController],
})
export class DogModule {}
