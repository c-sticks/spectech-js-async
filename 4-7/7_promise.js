async function f() {
  return 0;
}

// (s: number) => string

function sleep(milliSeconds) {
  return new Promise((r) => setTimeout(r, milliSeconds));
}

async function main() {
  console.log("a");
  await sleep(2000);
  console.log("b");
}

main();
