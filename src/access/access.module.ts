import { Module } from "@nestjs/common"
import { AccessGuard } from "./access.guard"
import { MongoModule } from "../mongo/mongo.module"

@Module({
  imports: [MongoModule],
  providers: [AccessGuard],
  exports: [AccessGuard],
})
export class AccessModule {}
