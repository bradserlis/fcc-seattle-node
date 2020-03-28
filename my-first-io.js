const fs = require('fs');

const filePath = process.argv[2];

const fileContents = fs.readFileSync(filePath, 'utf8');
const lines = fileContents.split('\n');
const newLinesCount = lines.length - 1;
console.log(newLinesCount);
