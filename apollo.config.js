module.exports = {
  client: {
    includes: ["./app/gql/**/*.ts"],
    service: {
      name: "blog",
      url: "http://localhost:8080/v1beta1/relay",
      headers: {
        "x-hasura-admin-secret": "notsecretatallthisisjustfordevelopment",
      },
    },
  },
};
