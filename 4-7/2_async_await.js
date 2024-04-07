async function asyncFunc() {
  console.log("normalFunction started");
  await fetch("https://delay-api.deno.dev?2s");
  console.log("normalFunction finished");
  return 0;
}

async function main() {
  const promise = await asyncFunc();
  console.log(promise);
  const num = await promise;
  console.log(num);
}

main();
