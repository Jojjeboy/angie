import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { StartComponent } from './start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ConcatStrPipe } from './concat-str.pipe';
import { PostsComponent } from './posts/posts.component';
import { MessageComponent } from './message/message.component';
import { FormComponent } from './form/form.component';
import { Message2Component } from './message2/message2.component';
import { CommonComponent } from './common/common.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    data: { title: 'Start Page' }
  },
  {
    path: 'start',
    component: StartComponent,
    data: { title: 'Start Page' }
  },
  {
    path: 'http',
    component: HttpComponent,
    data: { title: 'Http Page' }
  },
  {
    path: 'message',
    component: MessageComponent,
    data: { title: 'Message' }
  },
  {
    path: 'message2',
    component: Message2Component,
    data: { title: 'Messages2' }
  },
  {
    path: 'common',
    component: CommonComponent,
    data: { title: 'Common' }
  },
  {
    path: 'graph',
    component: GraphComponent,
    data: { title: 'Graph' }
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes, { enableTracing: false, relativeLinkResolution: 'legacy' }
    ),
    HttpClientModule,
    HighchartsChartModule

  ],
  exports: [RouterModule],
  declarations: [
    StartComponent,
    StartComponent,
    PageNotFoundComponent,
    HttpComponent,
    ConcatStrPipe,
    PostsComponent,
    MessageComponent,
    FormComponent,
    Message2Component,
    GraphComponent
  ],
})
export class AppRoutingModule { }
