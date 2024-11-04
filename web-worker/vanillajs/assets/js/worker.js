// Listen for messages from the main script
self.onmessage = function(event) {
    console.log('Message from main script',event);

    let sum = 0;
    for (let i = 0; i < 10000; i++) {
        sum += i;
    }
    postMessage(sum);
}
