function calcTotalPrice(priceWithoutTax, taxRate) {
  if (taxRate > 1) {
    throw new Error("taxRate should be less than 1");
  }
  return priceWithoutTax * taxRate;
}

function invoice(total) {
  console.log(`Total: $${total}`);
}

const price = 100;
const taxRate = 5;

try {
  const total = calcTotalPrice(price, taxRate);
  invoice(total);
} catch (e) {
  console.error(e);
}

console.log("Done");
