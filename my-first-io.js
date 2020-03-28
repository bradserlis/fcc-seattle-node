const fs = require('fs');

// fs.readFileSync('/path/to/file')
// returns Buffer Objet

//toString() Buffer

const contents = fs.readFileSync(process.argv[2]);
const lines = contents.toString().split('\n').length -1;

console.log(lines);
