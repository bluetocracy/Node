var fs = require('fs');
var filename = process.argv[2];
var total; 
fs.readFile(filename,'utf8', function callback(err,data){ });

total = data.split('\n').length - 1;
console.log(total);

