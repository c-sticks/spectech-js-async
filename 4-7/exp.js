function syncFunc(a, b) {
  const sum = a + b;
  const sub = a - b;
  return sum * sub;
}

function main() {
  const x = 100;
  const y = 200;
  const res = syncFunc(x, y);
  const z = res + 1;
  console.log(z);
}



main();
