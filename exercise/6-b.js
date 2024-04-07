/*
任意の非同期関数の配列asyncFunctionsと数値nを受け取り、
nミリ秒間隔で受け取った非同期関数を実行する関数を実装してください
*/

async function intervalExecuter(asyncFunctions, n) {
  for (const f of asyncFunctions) {
    await f();
    await new Promise((r) => setTimeout(r, n));
  }
}

// 実行例
const waiter = async (arg, ms) => {
  await new Promise((r) => setTimeout(r, ms));
  console.log(arg);
};
intervalExecuter(
  [
    () => waiter("a", 2000),
    () => waiter("b", 3000),
  ],
  1000,
);
// プログラム開始から2秒後に 'a',
// プログラム開始から6秒後に 'b'
// と出力されるはずです。
