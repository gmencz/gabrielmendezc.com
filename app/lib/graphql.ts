import { GraphQLClient } from "graphql-request";

export default new GraphQLClient(process.env.GRAPHQL_ENDPOINT as string);
export * from "graphql-request";
