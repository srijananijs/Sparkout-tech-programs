console.log('Hello World');

/*const fs = require('fs');
const os = require('os');
const index = require('./add');

var res = add.addTwono();
console.log(res);

var result = index.addTwono(4,5);
console.log(result);

const abc = require('lodash');
console.log(abc.isString('number'));
console.log(abc.isString(405));

var filtered_array = abc.uniq(['hey there',1,2,2,'hey']);
console.log(filtered_array);
*/

const fs = require('fs');

const abc = require('lodash');
const aaa = require('yargs');

const index = require('./add');

console.log("Process",process.argv);
console.log("Yargs",aaa.argv);

console.log(process.argv[2]);

var text = process.argv[2];

if (text === 'list'){
    console.log("list all");
}
else if(text === 'read'){
    console.log('read all');
}
else{
    console.log('Text not found');
}
