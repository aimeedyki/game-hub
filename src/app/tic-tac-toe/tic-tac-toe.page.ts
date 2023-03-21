import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.page.html',
  styleUrls: ['./tic-tac-toe.page.scss'],
})
export class TicTacToePage implements OnInit {
  public board: Array<Array<string>>;
  public gameOverText: string;
  public hasSelectedMarker: boolean;
  public isUserTurn: boolean;
  public isUsersWin: boolean;
  public showReplay: boolean;
  public userMarker: string;

  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.gameOverText = '';
    this.hasSelectedMarker = false;
    this.isUserTurn = true;
    this.isUsersWin = false;
    this.showReplay = false;
    this.userMarker = 'X';
  }

  ngOnInit() {}

  get selectedMarker() {
    return this.hasSelectedMarker
  }

  doMove(x: number, y: number, marker: string) {
    if (this.board[x][y] !== '') {
      return;
    }
    this.board[x][y] = marker;
  }

  doPlayerMove(x: number, y: number) {
    if (!this.isUserTurn) {
      return;
    }

    this.doMove(x, y, this.userMarker);
    this.isUserTurn = false;

    if (this.isWinner(this.userMarker)) {
      this.gameOverText = 'Congratulations You won!';
      this.showReplay = true;
      this.isUsersWin = true;
    } else if (this.isGameOver()) {
      this.gameOverText = 'Game Over! Nobody wins!';
      this.showReplay = true;
    } else {
      // setTimeout(this.doComputerMove, 1000);
      this.doComputerMove();
    }
  }

  doComputerMove() {
    if (this.isUserTurn) {
      return;
    }
    const computerMove = this.getRandomMove();
    const computerMarker = this.userMarker === 'X' ? 'O' : 'X';

    this.doMove(computerMove.x, computerMove.y, computerMarker);
    if (this.isWinner(computerMarker)) {
      this.gameOverText = 'You Lost!';
      this.showReplay = true;
    } else if (this.isGameOver()) {
      this.gameOverText = 'Game Over! Nobody wins!';
      this.showReplay = true;
    } else {
      this.isUserTurn = true;
    }
  }

  getEmptyCells() {
    let moves = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === '') {
          moves.push({ x: i, y: j });
        }
      }
    }
    return moves;
  }

  getRandomMove() {
    const emptyCells = this.getEmptyCells();
    const randomMoveIndex = Math.floor(Math.random() * emptyCells.length);

    return emptyCells[randomMoveIndex];
  }

  isGameOver() {
    return this.getEmptyCells().length === 0;
  }

  isWinner(marker: string) {
    // Horizontal rows
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] === marker &&
        this.board[1][i] === marker &&
        this.board[2][i] === marker
      ) {
        return true;
      }
    }

    // Vertical rows
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === marker &&
        this.board[i][1] === marker &&
        this.board[i][2] === marker
      ) {
        return true;
      }
    }

    // Diagonals
    if (
      this.board[0][0] === marker &&
      this.board[1][1] === marker &&
      this.board[2][2] === marker
    ) {
      return true;
    }

    if (
      this.board[0][2] === marker &&
      this.board[1][1] === marker &&
      this.board[2][0] === marker
    ) {
      return true;
    }

    return false;
  }

  setHasSelectedMarker() {
    this.hasSelectedMarker = true;
    console.log('after called', this.hasSelectedMarker)
  }
}
