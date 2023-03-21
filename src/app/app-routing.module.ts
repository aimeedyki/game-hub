import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home/tic-tac-toe',
    loadChildren: () => import('./tic-tac-toe/tic-tac-toe.module').then( m => m.TicTacToePageModule)
  },
  {
    path: 'home/sudoku',
    loadChildren: () => import('./sudoku/sudoku.module').then( m => m.SudokuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
