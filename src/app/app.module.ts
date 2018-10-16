import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { StartComponent } from './start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
//  { path: 'crisis-center', component: CrisisListComponent },
//  { path: 'hero/:id',      component: HeroDetailComponent },

{
    path: '',
    component: StartComponent,
    data: { title: 'Start Page' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Page' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Services Page' }
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    StartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




