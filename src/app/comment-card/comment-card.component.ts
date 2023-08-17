import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { Comment, CommentService, User } from '../services/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements AfterViewInit {
  @Input() index!: number;
  @Input() replyIndex!: number;
  @Output() replyEvent = new EventEmitter<{ index: number; user: string }>();

  comment$!: Observable<Comment>;
  user!: User;
  editMode: boolean = false;
  commentEdit: FormGroup;

  constructor(private fb: FormBuilder, private cs: CommentService) {
    this.commentEdit = this.fb.group({
      comment: ['', Validators.required],
    });
    this.user = this.cs.getUser();
  }

  ngAfterViewInit(): void {
    setTimeout(
      () => (this.comment$ = this.cs.getComment(this.index, this.replyIndex))
    );
    setTimeout(() => {
      this.comment$
        .pipe(
          tap((comment) => {
            this.commentEdit.patchValue({ comment: comment.text });
          }),
          take(1)
        )
        .subscribe();
    });
  }

  reply(replyUser: string = '') {
    this.replyEvent.emit({ index: this.index, user: replyUser });
  }

  updateComment() {
    this.cs.editComment(
      this.index,
      this.replyIndex,
      this.commentEdit.value.comment
    );
    this.editMode = false;
  }

  editComment() {
    this.editMode = true;
  }
  deleteComment() {
    this.cs.openModal(this.index, this.replyIndex);
  }
}
