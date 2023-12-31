import { Component, Input } from '@angular/core';
import { Comment } from '../services/comment.service';

@Component({
  selector: 'app-comment-group',
  templateUrl: './comment-group.component.html',
  styleUrls: ['./comment-group.component.scss'],
})
export class CommentGroupComponent {
  @Input() comment!: Comment;
  @Input() mainIndex!: number;

  replyUser!: string;
  showInput: boolean = false;

  onReply($event: { index: number; user: string }) {
    $event.index === this.mainIndex;
    this.replyUser = $event.user;
    this.showInput = true;
  }
  onHideInput($event: boolean) {
    this.showInput = $event;
  }
}
