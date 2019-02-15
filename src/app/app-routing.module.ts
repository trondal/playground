import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from 'src/app/rxjs/rxjs.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { HomeComponent } from 'src/app/home/home.component';
import { GithubComponent } from 'src/app/github/github.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'github', component: GithubComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
