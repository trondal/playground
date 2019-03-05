import { Cell } from './cell';
import { Point } from './point';

export class Board {
  cells: Cell[];
  cellWidth = 9;
  cellHeight = 9;

  constructor(private pxCell: number) {
    this.cells = [];
    for (let x = 0; x < 81; x++) {
      const point = this.getPoint(x);
      this.cells[x] = new Cell(0, point);
    }
  }

  newGame() {
    this.cells[1].setNumber(4);
    this.cells[6].setNumber(7);
    this.cells[7].setNumber(1);
    this.cells[9].setNumber(5);
    this.cells[10].setNumber(3);
    this.cells[13].setNumber(9);
    this.cells[16].setNumber(7);
    this.cells[20].setNumber(7);
    this.cells[22].setNumber(6);
    this.cells[24].setNumber(9);
    this.cells[25].setNumber(4);
    this.cells[27].setNumber(4);
    this.cells[29].setNumber(6);
    this.cells[31].setNumber(8);
    this.cells[33].setNumber(7);
    this.cells[34].setNumber(5);
    this.cells[35].setNumber(1);
    this.cells[37].setNumber(1);
    this.cells[42].setNumber(6);
    this.cells[43].setNumber(9);
    this.cells[46].setNumber(5);
    this.cells[47].setNumber(3);
    this.cells[49].setNumber(1);
    this.cells[53].setNumber(2);
    this.cells[54].setNumber(9);
    this.cells[55].setNumber(6);
    this.cells[58].setNumber(3);
    this.cells[61].setNumber(1);
    this.cells[63].setNumber(3);
    this.cells[64].setNumber(7);
    this.cells[67].setNumber(5);
    this.cells[68].setNumber(1);
    this.cells[72].setNumber(1);
    this.cells[75].setNumber(2);
    this.cells[77].setNumber(9);
    this.cells[78].setNumber(3);
    this.cells[79].setNumber(6);
    this.cells[80].setNumber(7);
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

  printBoard() {
    let str = '';
    for (let index = 0; index < this.cells.length; index++) {
      const cell = this.cells[index];
      const mod = index % 9;
      str = str + ' ' + cell.getNumber();
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
