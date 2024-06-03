//CommonJS, every file is module by default
// Modules - Encapsulated Code ( only share minimum)

const names = require(`./4-names`);
const sayHi = require('./5-utils');
const data = require('./6-alternative')

console.log(data);



sayHi(names.ngoga);
sayHi(names.ngabo);
