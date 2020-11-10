import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Dog, DogDocument } from "../dog/dog.schema"
import { Model } from "mongoose"

@Injectable()
export class Mongo {
  constructor(@InjectModel(Dog.name) private dogModel: Model<DogDocument>) {}

  async hasDog() {
    return this.dogModel.exists({ name: "Anton" })
  }
}
