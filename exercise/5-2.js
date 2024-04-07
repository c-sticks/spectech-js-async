async function awaitFunc(promise) {
  const result = await promise;
  console.log(result);

  console.log("done");
}

function thenFunc(promise) {
  promise.then((result) => {
    console.log(result);
    promise.then(() => {
      jsfejs.then(() => {
      });
    });
  });
}

thenFunc(
  new Promise((r) => setTimeout(() => r("await"), 1000)),
);
