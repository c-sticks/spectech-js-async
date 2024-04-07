// normal

async function heavyProcess(ms) {
  await new Promise((r) => setTimeout(r, ms));
}

function f() {
  console.log("f:", new Date());
}

async function f2() {
  await heavyProcess(1000);
  console.log("f2:", new Date());
}

async function main() {
  f();
  f();
  f();

  await f2();
  await f2();
  await f2();
}

main();
