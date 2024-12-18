
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema-example.graphql",
  generates: {
    "apps/nest-graphql/src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
