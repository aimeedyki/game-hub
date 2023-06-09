import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent  implements OnInit {
  @Input() cellValue?: string;

  constructor() { }

  ngOnInit() {}

}
