import { Module } from "@nestjs/common"
import { MongoModule } from "./mongo/mongo.module"
import { AccessModule } from "./access/access.module"
import { DogModule } from "./dog/dog.module"
import { MongooseModule, MongooseModuleOptions } from "@nestjs/mongoose"
import { ConfigModule, ConfigService } from "@nestjs/config"

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const host = config.get("MONGO_DB_HOST")
        const port = config.get<number>("MONGO_DB_PORT")
        const dbName = config.get("MONGO_DB_DATABASE")
        const user = config.get("MONGO_DB_USER")
        const password = config.get("MONGO_DB_PASSWORD")
        const query = config.get("MONGO_DB_QUERY")

        let uri = `mongodb://${host}:${port}/${dbName}`

        if (query) {
          uri += `?${query}`
        }

        return {
          uri,
          user,
          pass: password,
          useCreateIndex: true,
          promiseLibrary: global.Promise,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        } as MongooseModuleOptions
      },
    }),
    DogModule,
  ],
})
export class AppModule {}
