import { BGR_ALIVE, BGR_DEAD, BIT_ROT } from "./config";

let width: i32;
let height: i32;
let offset: i32;

@inline
function get(x: u32, y: u32): u32 {
  return load<u32>((y * width + x) << 2);
}

@inline
function set(x: u32, y: u32, v: u32): void {
  store<u32>((offset + y * width + x) << 2, v);
}

@inline
function rot(x: u32, y: u32, v: u32): void {
  const alpha = max<i32>((v >> 24) - BIT_ROT, 0);
  set(x, y, (alpha << 24) | (v & 0x00ffffff));
}

export function init(w: i32, h: i32): void {
  width = w;
  height = h;
  offset = w * h;

  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      let c =
        Math.random() > 0.1 ? BGR_DEAD & 0x00ffffff : BGR_ALIVE | 0xff000000;
      set(x, y, c);
    }
  }
}

export function step(): void {
  const w = width;
  const h = height;
  const hm1 = h - 1;
  const wm1 = w - 1;

  for (let y = 0; y < h; ++y) {
    let ym1 = y == 0 ? hm1 : y - 1,
      yp1 = y == hm1 ? 0 : y + 1;
    for (let x = 0; x < w; ++x) {
      let xm1 = x == 0 ? wm1 : x - 1,
        xp1 = x == wm1 ? 0 : x + 1;

      let aliveNeighbors =
        (get(xm1, ym1) & 1) +
        (get(x, ym1) & 1) +
        (get(xp1, ym1) & 1) +
        (get(xm1, y) & 1) +
        (get(xp1, y) & 1) +
        (get(xm1, yp1) & 1) +
        (get(x, yp1) & 1) +
        (get(xp1, yp1) & 1);

      const self = get(x, y);
      if (self & 1) {
        if ((aliveNeighbors & 0b1110) == 0b0010) rot(x, y, self);
        else set(x, y, BGR_DEAD | 0xff000000);
      } else {
        if (aliveNeighbors == 3) set(x, y, BGR_ALIVE | 0xff000000);
        else rot(x, y, self);
      }
    }
  }
}

export function fill(x: u32, y: u32, p: f64): void {
  for (let ix = 0; ix < width; ++ix) {
    if (Math.random() < p) set(ix, y, BGR_ALIVE | 0xff000000);
  }
  for (let iy = 0; iy < height; ++iy) {
    if (Math.random() < p) set(x, iy, BGR_ALIVE | 0xff000000);
  }
}
