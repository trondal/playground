import { Point } from './point';

export class Cell {
  solution: number;

  constructor(private index: number, private display: boolean, private point: Point) {}

  setSolution(nr: number) {
    this.solution = nr;
  }

  getSolution() {
    return this.solution;
  }

  setDisplay(value: boolean) {
    this.display = value;
  }

  isDisplay() {
    return this.display;
  }

  trySolution(nr: number) {
    if (nr !== this.solution) {
      console.error('New number: ' + nr + ' for index is not the same as the solution: ' + this.solution);
      return false;
    }
    // fake engine has corrected until now
    this.setDisplay(true);
  }

  getDisplay() {
    return this.display;
  }

  getIndex() {
    return this.index;
  }

  getPoint() {
    return this.point;
  }
}
