async function fetchData() {
  const response = await fetch("https://delay-api.deno.dev?600ms");
  const json = await response.json();
  return json;
}

async function main() {
  const promise1 = fetchData();
  const promise2 = fetchData();
  const promise3 = fetchData();

  const allPromises = Promise.all([promise1, promise2, promise3]);
  const reslt = await allPromises;

  console.log(reslt);
}

main();
