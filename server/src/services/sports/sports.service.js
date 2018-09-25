// Initializes the `sports` service on path `/sports`
const createService = require('feathers-mongoose');
const createModel = require('../../models/sports.model');
const hooks = require('./sports.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sports', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sports');

  service.hooks(hooks);
};
