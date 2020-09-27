import "wasi";
import { Console } from "as-wasi";

export function mandelbrot(): void {
  const mandelbrot = calculateMandelbrot(-2.0, 1.0, -1.0, 1.0, 100, 24, 1000);
  renderMandelbrot(mandelbrot);
}

function calculateMandelbrot(
  xMin: f64,
  xMax: f64,
  yMin: f64,
  yMax: f64,
  width: u32,
  height: u32,
  maxIters: u32
): u32[][] {
  const allRows: u32[][] = [];
  for (let i: u32 = 0; i < height; i++) {
    const row: u32[] = [];
    for (let j: u32 = 0; j < width; j++) {
      const cx = xMin + (xMax - xMin) * (f64(j) / width);
      const cy = yMin + (yMax - yMin) * (f64(i) / height);
      const escapedAt = mandelbrotAtPoint(cx, cy, maxIters);
      row.push(escapedAt);
    }
    allRows.push(row);
  }
  return allRows;
}

class Complex {
  re: f64;
  im: f64;
  constructor(re: f64, im: f64) {
    this.re = re;
    this.im = im;
  }

  mult(multiplier: Complex): Complex {
    return new Complex(
      this.re * multiplier.re - this.im * multiplier.im,
      this.re * multiplier.im + this.im * multiplier.re
    );
  }

  add(num: Complex): Complex {
    return new Complex(this.re + num.re, this.im + num.im);
  }

  norm(): f64 {
    return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
  }
}

function mandelbrotAtPoint(cx: f64, cy: f64, maxIters: u32): u32 {
  let z = new Complex(0.0, 0.0);
  let c = new Complex(cx, cy);
  for (let i: u32 = 0; i <= maxIters; i++) {
    if (z.norm() > 2.0) return i;
    z = z.mult(z).add(c);
  }
  return maxIters;
}

function renderMandelbrot(escapeVals: u32[][]): void {
  for (let i = 0; i < escapeVals.length; i++) {
    let line = "";
    const row = escapeVals[i];
    for (let j = 0; j < row.length; j++) {
      let val = "";
      const col = row[j];
      switch (true) {
        case col >= 0 && col <= 2:
          val = " ";
          break;
        case col >= 3 && col <= 5:
          val = ".";
          break;
        case col >= 6 && col <= 10:
          val = "•";
          break;
        case col >= 11 && col <= 30:
          val = "*";
          break;
        case col >= 31 && col <= 100:
          val = "+";
          break;
        case col >= 101 && col <= 200:
          val = "x";
          break;
        case col >= 201 && col <= 400:
          val = "$";
          break;
        case col >= 401 && col <= 700:
          val = "#";
          break;
        default:
          val = "%";
      }
      line = line.concat(val);
    }
    Console.log(line);
  }
}
