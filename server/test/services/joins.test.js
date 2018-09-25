const assert = require('assert');
const app = require('../../src/app');

describe('\'joins\' service', () => {
  it('registered the service', () => {
    const service = app.service('joins');

    assert.ok(service, 'Registered the service');
  });
});
