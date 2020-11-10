import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Mongo } from "../mongo/mongo"

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private mongo: Mongo) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return await this.mongo.hasDog()
  }
}
