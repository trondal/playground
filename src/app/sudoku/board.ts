import { Cell } from './cell';
import { Point } from './point';

export class Board {
  cells: Cell[];
  numbers: Cell[];
  cellWidth = 9;
  cellHeight = 9;

  constructor(private pxCell: number) {
    this.cells = [];
    for (let x = 0; x < 81; x++) {
      const point = this.getPoint(x);
      this.cells[x] = new Cell(x, false, point);
    }

    this.numbers = [];
    for (let y = 0; y < 9; y++) {
      const point = this.getPoint(y);
      const cell = new Cell(y, true, point);
      cell.setSolution(y + 1);
      this.numbers[y] = cell;
    }
  }

  setSolution(ary: number[][]) {
    let counter = 0;
    for (let colIndex = 0; colIndex < ary.length; colIndex++) {
      for (let rowIndex = 0; rowIndex < ary[colIndex].length; rowIndex++) {
        const value = ary[colIndex][rowIndex];
        const cell = this.cells[counter];
        cell.setSolution(value);
        counter++;
      }
    }
  }

  // 38
  setPuzzle(ary: number[][]) {
    let counter = 0;
    for (let colIndex = 0; colIndex < ary.length; colIndex++) {
      for (let rowIndex = 0; rowIndex < ary[colIndex].length; rowIndex++) {
        const value = ary[colIndex][rowIndex];
        const cell = this.cells[counter];

        if (value !== 0) {
          cell.setSolution(value);
          cell.setDisplay(true);
        }
        counter++;
      }
    }
  }

  setUserFake(ary: number[][]) {
    let counter = 0;
    for (let colIndex = 0; colIndex < ary.length; colIndex++) {
      for (let rowIndex = 0; rowIndex < ary[colIndex].length; rowIndex++) {
        const value = ary[colIndex][rowIndex];
        const cell = this.cells[counter];

        if (value !== 0) {
          cell.trySolution(value);
        }
        counter++;
      }
    }
  }

  private getPoint(index: number): Point {
    const mod = index % 9;
    const times = (index - mod) / 9;
    return new Point(mod * this.pxCell, times * this.pxCell);
  }

  getCell(index: number): Cell {
    return this.cells[index];
  }

  getCells(): Cell[] {
    return this.cells;
  }

  getNumbers(): Cell[] {
    return this.numbers;
  }

  printBoard() {
    let str = '';
    for (let index = 0; index < this.cells.length; index++) {
      const cell = this.cells[index];
      const mod = index % 9;
      str = str + ' ' + cell.getSolution();
      if (mod === 8) {
        console.log(str);
        str = '';
        console.log('');
      }
    }
  }

  isWholeNumber(n: number): boolean {
    const result = n - Math.floor(n) !== 0;
    if (result) {
      return false;
    } else {
      return true;
    }
  }
}
