import { Component, OnInit } from '@angular/core';
import { Cell } from './cell';
import { Board } from './board';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss'],
})
export class SudokuComponent implements OnInit {
  board: Board;
  cells: Cell[];
  size = 3;

  constructor() {}

  ngOnInit() {
    this.board = new Board(30);
    this.board.newGame();
    this.board.printBoard();
    this.cells = this.board.getCells();
  }

  constructTable(size: number) {}
}
