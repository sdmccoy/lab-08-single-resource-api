'use strict';

const server = require('./lib/server.js');

server.listen(3000, () => {
  console.log(`Server is up on `, server.address().port);
});
