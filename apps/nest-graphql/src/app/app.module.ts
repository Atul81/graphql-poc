import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlQueryResolver } from './resolver/graphql-query.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphqlMutationResolver } from './resolver/graphql-mutation.resolver';

@Module({
  imports: [
    // The ConfigModule lives here
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'apps/nest-graphql/src/generated/apolloSchema.graphql',
      driver: ApolloDriver,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GraphqlQueryResolver, GraphqlMutationResolver],
})
export class AppModule {}
