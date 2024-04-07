async function a(f) {
  for (;;) {
    await fetch("https://heavy.deno.dev/?d=200");
    // console.log(new Date());
  }

  f();
}

async function hoge() {
  console.log("a");
  const a = fetch("https://heavy.deno.dev/?d=1000");
  a.then(() => {
    console.log("x");
    console.log("y");
    console.log("z");
  }).catch(() => {})
    .finally(() => {});
  console.log("b");
}

async function hoge2() {
  console.log("a");
  try {
    const a = await fetch("https://heavy.deno.dev/?d=1000");
  } catch (e) {
    console.log(e);
  }
  console.log("x");
  console.log("y");
  console.log("z");
}

hoge();
