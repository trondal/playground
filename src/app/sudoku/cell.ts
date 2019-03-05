import { Point } from './point';

export class Cell {
  constructor(private number: number, private point: Point) {}

  setNumber(number: number) {
    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  getPoint() {
    return this.point;
  }

  getClassX(): string {
    switch (this.point.x) {
      case 0:
        return 'left0';
        break;
      case 30:
        return 'left1';
        break;
      case 60:
        return 'left2';
        break;
      case 90:
        return 'left3';
        break;
      case 120:
        return 'left4';
        break;
      case 150:
        return 'left5';
        break;
      case 180:
        return 'left6';
        break;
      case 210:
        return 'left7';
        break;
      case 240:
        return 'left8';
        break;
      default:
        break;
    }
  }

  getClassY(): string {
    switch (this.point.y) {
      case 0:
        return 'top0';
        break;
      case 30:
        return 'top1';
        break;
      case 60:
        return 'top2';
        break;
      case 90:
        return 'top3';
        break;
      case 120:
        return 'top4';
        break;
      case 150:
        return 'top5';
        break;
      case 180:
        return 'top6';
        break;
      case 210:
        return 'top7';
        break;
      case 240:
        return 'top8';
        break;
      default:
        break;
    }
  }
}
