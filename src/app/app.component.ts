import { Component } from '@angular/core';
import { Comment, CommentService } from './services/comment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'comments-section';
  comments$!: Observable<Comment[]>;
  constructor(private cs: CommentService) {
    this.comments$ = this.cs.getComments();
  }
}
