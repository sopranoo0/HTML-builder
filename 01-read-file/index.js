const fs = require('fs');
const path = require('path');
const process = require('process');

const fileLocation = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(fileLocation, 'utf-8');
readStream.on('data', chunk => process.stdout.write(chunk));

// const fs = require('fs');
// const stream = fs.createReadStream('01-read-file/text.txt', 'utf-8');
// let data = '';

// stream.on('data', chunk => data += chunk);
// stream.on('end', () => console.log('End', data));
// stream.on('error', error => console.log('Error', error.message));