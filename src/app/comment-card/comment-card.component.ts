import { AfterViewInit, Component, Input, inject } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements AfterViewInit {
  @Input() username!: string;
  @Input() image!: string;
  @Input() replyUser?: string;
  @Input() time!: number;
  @Input() text!: string;
  @Input() score!: number;
  allowEdit: boolean = false;
  private cs: CommentService = inject(CommentService);

  ngAfterViewInit(): void {
    setTimeout(() => (this.allowEdit = this.username === this.cs.getUser()));
  }
}
