console.log('Welcome to Holberton School, what is your name?');
const name = process.stdin.on('readable',()=> {
    const nm = process.stdin.read();
    if (nm !== null) {
        const b = `${nm}`;
        console.log(`Your name is: ${b.trim()}`);
        console.log('This important software is now closing');
    }

});