/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = '';
  for (let dog = email.lastIndexOf('@') + 1; dog < email.length; dog++) {
    domain += email[dog];
  }
  return domain;
}

module.exports = getEmailDomain;
