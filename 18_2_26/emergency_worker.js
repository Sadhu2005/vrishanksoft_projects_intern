let counter = 0;

const ticker = setInterval(() => {
  counter += 1;
  postMessage(counter);
}, 500);

self.onmessage = (event) => {
  if (event.data === "reset") {
    counter = 0;
    postMessage(counter);
  }
};
