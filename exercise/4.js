// 以下の関数を実装してください
// x2sec:
//   2秒後に文字 'X' を返す非同期関数
// y5sec:
//   5秒後に文字 'Y' を返す非同期関数
// main:
//   x2sec と y5sec を使用しプログラムを開始してから
//   2秒後に'X'、プログラムを開始してから5秒後に'Y'を出力する非同期関数
//   なお、出力する文字 'X', 'Y' はx2secとy5secの戻り値を使用すること
async function x2sec() {
  await new Promise((r) => setTimeout(r, 2000));
  return "X";
}

async function y5sec() {
  return await new Promise((r) => setTimeout(() => r("Y"), 5000));
}

async function main1() {
  x2sec().then((x) => console.log(x));
  y5sec().then((y) => console.log(y));
}

async function main2() {
  const xPrint = async () => {
    const x = await x2sec();
    console.log(x);
  };
  const yPrint = async () => {
    const y = await y5sec();
    console.log(y);
  };

  xPrint();
  yPrint();
}

// コードを実装したら、以下の行のコメントを外してテストしてみてください。
main2();
