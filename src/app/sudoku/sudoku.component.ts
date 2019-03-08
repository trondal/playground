import { Component, OnInit } from '@angular/core';
import { Cell } from './cell';
import { Board } from './board';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss'],
})
export class SudokuComponent implements OnInit {
  board: Board;
  cells: Cell[];
  numbers: Cell[];
  size = 3;

  ngOnInit() {
    this.board = new Board(30);

    const puzzle = [
      [0, 4, 0, 0, 0, 7, 1, 0, 0],
      [5, 3, 0, 0, 9, 0, 0, 7, 0],
      [0, 0, 7, 0, 6, 0, 9, 4, 0],
      [4, 0, 6, 0, 8, 0, 7, 5, 1],
      [0, 1, 0, 0, 0, 0, 6, 9, 0],
      [0, 5, 3, 0, 1, 0, 0, 0, 2],
      [9, 6, 0, 0, 3, 0, 0, 1, 0],
      [3, 7, 0, 0, 5, 1, 0, 0, 0],
      [1, 0, 0, 2, 0, 9, 3, 6, 7],
    ];

    const solution = [
      [6, 4, 9, 5, 2, 7, 1, 3, 8],
      [5, 3, 1, 8, 9, 4, 2, 7, 6],
      [8, 2, 7, 1, 6, 3, 9, 4, 5],
      [4, 9, 6, 3, 8, 2, 7, 5, 1],
      [2, 1, 8, 4, 7, 5, 6, 9, 3],
      [7, 5, 3, 9, 1, 6, 4, 8, 2],
      [9, 6, 2, 7, 3, 8, 5, 1, 4],
      [3, 7, 4, 6, 5, 1, 8, 2, 9],
      [1, 8, 5, 2, 4, 9, 3, 6, 7],
    ];

    const userSeed = [
      [6, 4, 9, 5, 2, 7, 1, 3, 8], // last  must be 8
      [5, 3, 1, 8, 9, 4, 2, 7, 6],
      [8, 2, 7, 1, 6, 3, 9, 4, 5],
      [4, 9, 6, 3, 8, 2, 7, 5, 1],
      [2, 1, 8, 4, 7, 5, 6, 9, 3],
      [7, 5, 3, 9, 1, 6, 4, 8, 2],
      [9, 6, 2, 7, 3, 8, 5, 1, 4],
      [3, 7, 4, 6, 5, 1, 8, 2, 9],
      [1, 8, 5, 2, 4, 9, 3, 6, 7],
    ];

    this.board.setPuzzle(puzzle);
    this.board.setSolution(solution);
    this.board.setUserFake(userSeed);

    // this.board.verifyRows();
    // this.board.verifyColumns();
    // this.boardverifySubCell();

    this.cells = this.board.getCells();
    this.numbers = this.board.getNumbers();
    console.log(this.numbers);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      console.log('previousIndex: ' + event.previousIndex);
      console.log('currentIndex: ' + event.currentIndex);
      //const index = this.cells.indexOf(eventcurrentIndex, 0);
      //if (index > -1) {
      //this.cells.splice(event.currentIndex + 1, 1);
      //}

      /**
       * Copies an item from one array to another, leaving it in its
       * original position in current array.
       * @param currentArray Array from which to copy the item.
       * @param targetArray Array into which is copy the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       *
       */
      //copyArrayItem<T = any>(currentArray: T[], targetArray: T[], currentIndex: number, targetIndex: number): void;
    }
  }
}
