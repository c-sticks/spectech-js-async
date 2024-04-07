async function fetchData() {
  const response = await fetch("https://delay-api.deno.dev?600ms");
  const json = await response.json();
  return json;
}

async function main() {
  const promise1 = await fetchData();

  const promise2 = fetchData(promise1);
  const promise3 = fetchData(promise1);

  const allPromises = Promise.all([promise2, promise3]);
  const reslt = await allPromises;

  console.log(reslt);
}

main();
