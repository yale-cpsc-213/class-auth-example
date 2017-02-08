const users = [{
    username: 'bob',
    password: 'foo',
  },
  {
    username: 'betty',
    password: 'bar',
  },
];

function getUserByUsername(username) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      return users[i];
    }
  }
}

module.exports = exports = {
  users,
  getUserByUsername,
}
