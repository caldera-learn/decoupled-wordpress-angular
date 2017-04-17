import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WPApiService } from './services/wp-api.service';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsSingleComponent } from './components/posts-single/posts-single.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: ':slug',
    component: PostsSingleComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostsSingleComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    WPApiService
  ],
  exports: [
      RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
