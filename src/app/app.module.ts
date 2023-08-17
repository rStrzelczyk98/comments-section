import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { CommentGroupComponent } from './comment-group/comment-group.component';
import { CommentInputComponent } from './comment-input/comment-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommentCardComponent,
    CommentGroupComponent,
    CommentInputComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
