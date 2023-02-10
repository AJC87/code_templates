process.stdin.resume();

// TODO: do this as an arrow function
// TODO: maybe pass signal to this and use a switch on signal type
function cleanup(): void {
    console.log('fill me in!');
    console.log('exiting...');
    process.exit();
}

// TODO: do this as an arrow function
function handleSignal(signal: string): void {
    console.log(`signal ${signal} received`);
    process.exit();
}

// TODO: include other signals, maybe wrap this in a function
process.on('SIGINT', () => {
    console.log('SIGINT received, running cleanup function');
    cleanup();
});

// TODO: include other signals, maybe wrap this in a function
process.on('SIGTERM', handleSignal);
