import "wasi";
import { Console } from "as-wasi";

export function mandelbrot(): void {
  const mandelbrot = calculateMandelbrot(1000, -2.0, 1.0, -1.0, 1.0, 100, 24);
  renderMandelbrot(mandelbrot);
}

function calculateMandelbrot(
  maxIters: i32,
  xMin: f64,
  xMax: f64,
  yMin: f64,
  yMax: f64,
  width: i32,
  height: i32
): i32[][] {
  const allRows: i32[][] = [];
  for (let i = 0; i < height; i++) {
    const row: i32[] = [];
    for (let j = 0; j < width; j++) {
      const cx = xMin + (xMax - xMin) * (((j as f64) / width) as f64);
      const cy = yMin + (yMax - yMin) * (((i as f64) / height) as f64);
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
      (this.re * multiplier.re - this.im * multiplier.im) as f64,
      (this.re * multiplier.im + this.im * multiplier.re) as f64
    );
  }

  add(num: Complex): Complex {
    return new Complex((this.re + num.re) as f64, (this.im + num.im) as f64);
  }

  norm(): f64 {
    return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
  }
}

function mandelbrotAtPoint(cx: f64, cy: f64, maxIters: i32): i32 {
  let z = new Complex(0.0, 0.0);
  let c = new Complex(cx, cy);
  for (let i = 0; i <= maxIters; i++) {
    if (z.norm() > 2.0) return i;
    z = z.mult(z).add(c);
  }
  return maxIters;
}

function renderMandelbrot(escapeVals: i32[][]): void {
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
