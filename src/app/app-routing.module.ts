import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from 'src/app/rxjs/rxjs.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { HomeComponent } from 'src/app/home/home.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { GitSearchComponent } from './git-search/git-search.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'git-search', component: GitSearchComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'sudoku', component: SudokuComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
