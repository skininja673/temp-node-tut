// const items = ['item1', 'item2'];
module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob',
};

module.exports.singlePerson = person;

function helloWorld() {
    console.log('hello world');
}
module.exports.func = helloWorld;
