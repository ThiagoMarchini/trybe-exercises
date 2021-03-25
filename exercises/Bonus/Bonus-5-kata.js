const assert = require('assert');
// Create a Password verifications class called “PasswordVerifier”.

// Add the following verifications to a master function called “Verify()”
function verify(entry) {
  if (!entry) {throw new Error('password must not be null')}
  else if (entry.length < 8) {throw new Error('password must be at least 8 characters long')}
  else if (!entry.match(/[a-z]/)) {throw new Error('password must have at least 1 lowercase character')}
  else if (!entry.match(/[A-Z]/)) {throw new Error('password must have at least 1 uppercase character')}
  else if (!/[0-9]/.test(entry)) {throw new Error('password must have at least 1 number')}
  else {return console.log('password OK!')};
}

// password should be larger than 8 chars
let password = '1234567';
assert.throws(() => { verify(password); }, /^Error: password must be at least 8 characters long$/);

// password should not be null
assert.throws(() => { verify(); }, /^Error: password must not be null$/);

// // password should have one uppercase letter at least
password = 'ASDFQWER';
assert.throws(() => { verify(password); }, /^Error: password must have at least 1 lowercase character$/);

// // password should have one lowercase letter at least
password = 'asdfqwer';
assert.throws(() => { verify(password); }, /^Error: password must have at least 1 uppercase character$/);

// password should have one number at least
password = 'asdfQWER';
assert.throws(() => { verify(password); }, /^Error: password must have at least 1 number$/);

// Each one of these should throw an exception with a different message of your choosing