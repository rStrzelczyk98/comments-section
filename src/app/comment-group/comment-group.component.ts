import { Component, Input } from '@angular/core';
import { Comment } from '../services/comment.service';

@Component({
  selector: 'app-comment-group',
  templateUrl: './comment-group.component.html',
  styleUrls: ['./comment-group.component.scss'],
})
export class CommentGroupComponent {
  @Input() comment!: Comment;
}
