var generator = require('./generator');
var samples = require('./samples');

console.log(JSON.stringify(Object.keys(samples)));

//var data = generator.create(samples.test.person, {rootTypeName: 'Person'});
var data = generator.create(samples.todo.nodb, {rootTypeName: 'TodoList'});
console.log(JSON.stringify(data.types, null, 2));
