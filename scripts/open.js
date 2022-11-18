// eslint-disable-next-line import/no-extraneous-dependencies
const open = require('open');

const { port } = require('../config');

open(`http://localhost:${port}`);
