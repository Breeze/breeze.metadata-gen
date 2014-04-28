var generator = require('./generator');
var samples = require('./samples');

console.log(JSON.stringify(Object.keys(samples)));

var data = generator.create(samples.test.person, {rootTypeName: 'Person'});
console.log(JSON.stringify(data,null, 2));
