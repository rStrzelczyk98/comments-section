import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { CommentGroupComponent } from './comment-group/comment-group.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentCardComponent,
    CommentGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
