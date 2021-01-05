exports.seed = function (knex) {
  return knex("roles").then(function () {
    return knex("roles").insert([
      {
        role_id: 1,
        name: "Fundraiser",
      },
      {
        role_id: 2,
        name: "Funder",
      },
    ]);
  });
};
