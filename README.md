# Async/Await Explained

## syncronous function

```js
function f() {
  return 0;
}

function main() {
  f();
  f();
  f();
}
```

```mermaid
sequenceDiagram

main ->>+ f: f()
f ->>- main: 0
main ->>+ f: f()
f ->>- main: 0
main ->>+ f: f()
f ->>- main: 0
```

## Asyncronous function

```js
async function oneSecFunc() {}

function main() {
  oneSecFunc();
  oneSecFunc();
  oneSecFunc();
}
```

```mermaid
sequenceDiagram

main ->>+ oneSecFunc: oneSecFunc()
oneSecFunc ->>- main: Promise<number>
main ->>+ oneSecFunc: oneSecFunc()
oneSecFunc ->>- main: Promise<number>
main ->>+ oneSecFunc: oneSecFunc()
oneSecFunc ->>- main: Promise<number>
```

```js
async function oneSecFunc() {
    ...
    return 0;
}

function main() {
  await oneSecFunc();
  await oneSecFunc();
  await oneSecFunc();
}
```

```mermaid
sequenceDiagram

main ->>+ oneSecFunc: await oneSecFunc()
oneSecFunc ->>- main: return 0
main ->>+ oneSecFunc: await oneSecFunc()
oneSecFunc ->>- main: return 0
main ->>+ oneSecFunc: await oneSecFunc()
oneSecFunc ->>- main: return 0
```
