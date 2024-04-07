async function x2sec() {
  await new Promise((r) => setTimeout(r, 2000));
  return "X";
}

async function y5sec() {
  return await new Promise((r) => setTimeout(() => r("Y"), 5000));
}

async function main() {
  const xPromise = x2sec();
  const yPromise = y5sec();

  // miyazaki
  await new Promise((r) => setTimeout(r, 5000));
  console.log(await xPromise);
  await new Promise((r) => setTimeout(r, 1000));
  console.log(await yPromise);

  new Promise((r) => setTimeout(r, 5000)).then(() => {
    xPromise.then((x) => {
      console.log(x);
    });
  });
  new Promise((r) => setTimeout(r, 6000)).then(() => {
    yPromise.then((y) => {
      console.log(y);
    });
  });

  // hongo
  setTimeout(() => {
    xPromise.then(console.log);
  }, 5000);
  setTimeout(() => {
    yPromise.then(console.log);
  }, 6000);

  /*  // sato
  setTimeout(async () => {
    const x = await xPromise;
    console.log(x);
  }, 5000); */
}
