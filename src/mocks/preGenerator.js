const fs = require('fs');
const path = require('path');

const ChatData = require('./chat');

// copy and paste ChatData class and its dependencies
// then run file to get static mock data

const content = [...new Array(5)].map((item, i) => new ChatData(i));
fs.writeFile(path.resolve(__dirname, 'preGeneratedStaticData'), JSON.stringify(content));
