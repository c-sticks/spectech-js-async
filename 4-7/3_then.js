async function asyncFunc() {
  console.log("A-1");
  await fetch("https://delay-api.deno.dev?2s");
  console.log("A-2");
  return 0;
}

async function main() {
  const promise = asyncFunc();
  promise
    .then((result) => {
      console.log("X", result);
    })
    .catch((e) => {
      console.error(e);
    });

  console.log("Y");
}

main();

/*
--
1. A-1
2. A-2
3. X
4. Y
--
1. A-1
2. Y
3. A-2
4. X
--
1. A-1
2. X
4. X
3. A-2
--
*/
