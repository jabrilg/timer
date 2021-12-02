const sentence = "hello there from lighthouse labs\n";

for (let x = 0; x < sentence. length; x++) {
    setTimeout (() => {
    process.stdout.write(sentence[x]);
    }, x * 500);
}
