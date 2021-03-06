import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitSearchService } from 'src/app/services/git-search.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { NoSpecialCharsDirective } from './no-special-chars.directive';

@NgModule({
  declarations: [AppComponent, RxjsComponent, HomeComponent, NotFoundComponent, GitSearchComponent, SudokuComponent, NoSpecialCharsDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    DragDropModule,
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
