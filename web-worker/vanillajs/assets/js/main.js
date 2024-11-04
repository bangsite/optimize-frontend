'use strict';

const worker = new Worker("./assets/js/worker.js");

const sumBtn = document.getElementById('sumBtn');
const bgBtn = document.getElementById('bgBtn');
const colors = ["red", "green", "blue", "orange", "yellow"];

sumBtn.addEventListener('click', event => {
    console.log(sumBtn)
    worker.postMessage("calculate");
});

bgBtn.addEventListener('click', event => {
    let index = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[index];
    worker.postMessage("calculate");
});

// Listen for message from  Web Worker
worker.onmessage = function (event) {
    alert(event.data);
}
