# 非同期演習問題

### 演習問題 1: 基本的な `async` / `await` の使用

```jsx
// 問題:
// asyncFunctionExampleを実装し、2秒後に文字列 'Done!' を返すようにしてください。
// 以下のコードのコメントを外すと、期待される出力を確認できます。
async function asyncFunctionExample() {
  // ここにコードを書いてください。
}

// コードを実装したら、以下の行のコメントを外してテストしてみてください。
// asyncFunctionExample().then(console.log); // 'Done!' が2秒後にコンソールに表示されるべきです。
```

### 演習問題 2: エラーハンドリング

```jsx
// 問題:
// asyncFunctionWithErrorを実装し、何らかの処理を行ったあと、エラーをthrowするようにしてください。
// try/catchブロックを使用してエラーを処理する asyncWithTryCatch() 関数を実装します。
// スローされたエラーはキャッチしてコンソールに表示してください。

async function asyncFunctionWithError() {
  // ここにコードを書いてください。
}

async function asyncWithTryCatch() {
  try {
    await asyncFunctionWithError();
  } catch (error) {
    console.error("Caught error:", error);
  }
}

// asyncWithTryCatch(); // 'Caught error:' と共にエラーメッセージが表示されるべきです。
```

### 演習問題 3: 複数の非同期関数

```jsx
// 以下の関数を実装してください
// x2sec:
//   2秒後に文字 'X' を返す非同期関数
// y5sec:
//   5秒後に文字 'Y' を返す非同期関数
// main:
//   x2sec と y5sec を使用しプログラムを開始してから
//   5秒後に'X'と'Y'を出力する非同期関数。
//   なを 出力する文字 'X', 'Y' はx2secとy5secの戻り値を使用すること
async function x2sec() {
  // ここにコードを書いてください。
}

async function y5sec() {
  // ここにコードを書いてください。
}

async function main() {
  // ここにコードを書いてください。
}

// コードを実装したら、以下の行のコメントを外してテストしてみてください。
// main()
```

### 演習問題 4: 複数の非同期関数その 2

```jsx
// 以下の関数を実装してください
// x2sec:
//   2秒後に文字 'X' を返す非同期関数
// y5sec:
//   5秒後に文字 'Y' を返す非同期関数
// main:
//   x2sec と y5sec を使用しプログラムを開始してから
//   2秒後に'X'、プログラムを開始してから5秒後に'Y'を出力する非同期関数
//   なを 出力する文字 'X', 'Y' はx2secとy5secの戻り値を使用すること
async function x2sec() {
  // ここにコードを書いてください。
}

async function y5sec() {
  // ここにコードを書いてください。
}

async function main() {
  // ここにコードを書いてください。
}

// コードを実装したら、以下の行のコメントを外してテストしてみてください。
// main()
```

### 演習問題 5: 複数の非同期関数その 3

```jsx
// 以下の関数を実装してください
// x2sec:
//   2秒後に文字 'X' を返す非同期関数
// y5sec:
//   5秒後に文字 'Y' を返す非同期関数
// main:
//   x2sec と y5sec を使用しプログラムを開始してから
//   5秒後に'X'を出力し、プログラムを開始してから6秒後に 'Y'を出力する。
//   その2秒後に 'Done' を出力する
//   なを 出力する文字 'X', 'Y' はx2secとy5secの戻り値を使用すること
async function x2sec() {
  return await new Promise((resolve) => setTimeout(() => resolve("X"), 2000));
}

async function y5sec() {
  return await new Promise((resolve) => setTimeout(() => resolve("Y"), 5000));
}

async function main() {
  // ここにコードを書いてください。
}

// コードを実装したら、以下の行のコメントを外してテストしてみてください。
// main()
```
