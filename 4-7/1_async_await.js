async function asyncFunc() {
  console.log("normalFunction started");
  await fetch("https://delay-api.deno.dev?2s");
  console.log("normalFunction finished");
}

async function main1() {
  console.log("--- a");
  asyncFunc();
  console.log("--- b");
}

async function main2() {
  console.log("--- a");
  await asyncFunc();
  console.log("--- b");
}

main();
