async function f() {
  return 0;
}

// (s: number) => string

async function sleep(milliSeconds) {
  // const promise = new Promise((r) => setTimeout(r, 3000));

  // await promise;

  return new Promise((r) => setTimeout(r, 200));
}

async function main() {
  console.log("a");
  await sleep(2000);
  console.log("b");
}

main();
