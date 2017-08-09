import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
// Custom Components
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service'
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ BrowserModule, 
    FormsModule, //<- Needed to import NgModule
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: "detail/:id",
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})


export class AppModule { }
