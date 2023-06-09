import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonComponentModule } from '../button/button.module';
import { CellComponentModule } from '../cell/cell.module';
import { TicTacToePageRoutingModule } from './tic-tac-toe-routing.module';
import { TicTacToePage } from './tic-tac-toe.page';

@NgModule({
  imports: [
    ButtonComponentModule,
    CellComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TicTacToePageRoutingModule,
  ],
  declarations: [TicTacToePage],
})
export class TicTacToePageModule {}
