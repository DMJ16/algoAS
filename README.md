# 🚀 as-algo 

![CircleCI](https://img.shields.io/circleci/build/github/DMJ16/as-algo?style=plastic)

## 📖 Summary

Algorithms, data structures, and general computer science problems in AssemblyScript.

## 🧰 Technology and Tools 

AssemblyScript + as-wasi + wasmtime + as-pect

## 🧪 Tests

Test suites written in as-pect, which brings Jest and ts-jest to AssemblyScript.

## 🧩 WASI

### 🧮 Mandelbrot

![](https://media.giphy.com/media/ifNKKnRWnSmLRMPdby/giphy.gif)

### 🌀 Matrix Spiral Traversal

![](https://media.giphy.com/media/izSfqealbmnmaJJaHG/giphy.gif)

## 🌐 Web

### 👾 Conway's Game of Life

Reimplementation of the official AssemblyScript example ([AS Demo](https://www.assemblyscript.org/examples/game-of-life.html#example)).

#### Instructions

```javascript
// install dependencies
npm install
```

```javascript
// build game of life wasm module and .wat representation
npm run asbuild:gameOfLife
```

```javascript
// start a local server
npm start
```

![](https://media.giphy.com/media/SAaFFgKsyWSx0dFkXj/giphy.gif)
