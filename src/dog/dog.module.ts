import { Module } from "@nestjs/common"
import { DogController } from "./dog.controller"
import { AccessModule } from "../access/access.module"
import { AccessGuard } from "../access/access.guard"

@Module({
  imports: [AccessModule],
  providers: [AccessGuard],
  controllers: [DogController],
})
export class DogModule {}
