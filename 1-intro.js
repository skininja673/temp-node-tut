const amount = 12;

if (amount < 10) {
    console.log('smaller');
} else {
    console.log('bigger');
}
console.log(`hey its my first node app ${amount}`);

setInterval((e) => {
    console.log('hello world', e);
}, 1000);
