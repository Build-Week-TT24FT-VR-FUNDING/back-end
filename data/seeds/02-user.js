exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "First-User",
          last_name: "Test",
          email: "user@vrfund.com",
          password: "salkdasldask3242389e4ijagjhgjkllpsfdksanf",
          role: 1,
        },
        {
          first_name: "Second-User",
          last_name: "Test",
          email: "user2@vrfund.com",
          password: "salkdasldask1242189e4saghjghjdasij;'8asfdk",
          role: 2,
        },
        {
          first_name: "Third-User",
          last_name: "Test",
          email: "user1@vrfund.com",
          password: "salkdasldask12ghj22189e6662sadasijasf256dk",
          role: 1,
        },
        {
          first_name: "Fourth-User",
          last_name: "Test",
          email: "usertest@vrfund.com",
          password: "salkdasldask1222389e2saasdsadsadsgf32532dk",
          role: 2,
        },
      ]);
    });
};
