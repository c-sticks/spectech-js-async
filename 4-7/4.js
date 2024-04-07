async function asyncFunc() {
  console.log("normalFunction started");
  await fetch("https://delay-api.deno.dev?2s");
  console.log("normalFunction finished");
  return 0;
}

function main2() {
  asyncFunc().then((result) => {
    console.log("result is", result);
  }).catch((e) => {
    console.log("error is", e);
  });
}

async function main2() {
  try {
    const result = await asyncFunc();
    console.log("result is", result);
  } catch (e) {
    console.log("error is", e);
  }
}
