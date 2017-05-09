const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    const fabian = new User({ name: 'Fabian' });

    fabian.save()
      .then(() => {
        assert(!fabian.isNew);
        done();
      });
  });
});
