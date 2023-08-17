import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  constructor(private cs: CommentService) {}
  cancel() {
    this.cs.closeModal();
  }
  deleteComment() {
    this.cs.closeModal(true);
  }
}
