async function asyncFunc() {
  await fetch("https://delay-api.deno.dev?2s");
  return 0;
}

async function main() {
  console.log("main started");
  const promise = asyncFunc();
  console.log("POINT A");
  await promise;
  console.log("main finished");
}

main();
