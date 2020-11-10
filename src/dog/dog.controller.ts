import { Controller, Get, UseGuards } from "@nestjs/common"
import { AccessGuard } from "../access/access.guard"

@Controller("dogs")
@UseGuards(AccessGuard)
export class DogController {
  @Get()
  getDog() {
    return { name: "Anton", breed: "Spitz" }
  }
}
