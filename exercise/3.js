// 以下の関数を実装してください
// x2sec:
//   2秒後に文字 'X' を返す非同期関数
// y5sec:
//   5秒後に文字 'Y' を返す非同期関数
// main:
//   x2sec と y5sec を使用しプログラムを開始してから
//   5秒後に'X'と'Y'を出力する非同期関数。
//   なお、出力する文字 'X', 'Y' はx2secとy5secの戻り値を使用すること
async function x2sec() {
  await new Promise((r) => setTimeout(r, 2000));
  return "X";
}

async function y5sec() {
  return await new Promise((r) => setTimeout(() => r("Y"), 5000));
}

async function main1() {
  const xPromise = x2sec();
  const yPromise = y5sec();

  const mergedPromise = await Promise.all([xPromise, yPromise]);

  console.log(mergedPromise[0]);
  console.log(mergedPromise[1]);
}

async function main2() {
  const xPromise = x2sec();
  const yPromise = y5sec();

  const y = await yPromise;
  const x = await xPromise;

  console.log(x);
  console.log(y);
}

// コードを実装したら、以下の行のコメントを外してテストしてみてください。
main1();
