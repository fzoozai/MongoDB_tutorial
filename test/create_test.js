const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', () => {
    const fabian = new User({ name: 'Fabian' });
    
    fabian.save();
  });
});
