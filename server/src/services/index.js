const users = require('./users/users.service.js');
const sports = require('./sports/sports.service.js');
const joins = require('./joins/joins.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(sports);
  app.configure(joins);
};
