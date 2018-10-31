import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { StartComponent } from './start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpComponent } from './http/http.component';
import { ConcatStrPipe } from './concat-str.pipe';

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
    path: 'http',
    component: HttpComponent,
    data: { title: 'Http Page' }
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StartComponent,
    PageNotFoundComponent,
    HttpComponent,
    ConcatStrPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




