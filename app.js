console.log('Starting');

setTimeout(() => {
    console.log('2 Second Timer');
}, 2000);

setTimeout(() => {
    console.log('0 Second Timer');
}, 0);

console.log('Stopping');

const asyncTest = async () => {
    await setTimeout(() => console.log('4 Second Timer'), 4000);

    console.log('After 4 second');
};

asyncTest();