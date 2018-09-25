const assert = require('assert');
const app = require('../../src/app');

describe('\'sports\' service', () => {
  it('registered the service', () => {
    const service = app.service('sports');

    assert.ok(service, 'Registered the service');
  });
});
