import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.page.html',
  styleUrls: ['./tic-tac-toe.page.scss'],
})
export class TicTacToePage implements OnInit {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  constructor() {}

  ngOnInit() {}
}
