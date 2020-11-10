import { Module } from "@nestjs/common"
import { DogModule } from "./dog/dog.module"
import { MongooseModule, MongooseModuleOptions } from "@nestjs/mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"

const mongod = new MongoMemoryServer()

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => {
        let info = mongod.getInstanceInfo()

        if (!info) {
          await mongod.start()
        }

        info = mongod.getInstanceInfo()

        if (info) {
          return {
            uri: info.uri,
            dbName: "dogsDB",
            useCreateIndex: true,
            promiseLibrary: global.Promise,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
          } as MongooseModuleOptions
        }
      },
    }),
    DogModule,
  ],
})
export class AppModule {}
