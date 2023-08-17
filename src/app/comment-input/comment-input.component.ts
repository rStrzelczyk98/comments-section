import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss'],
})
export class CommentInputComponent {
  @Input() index!: number;
  @Input() reply!: boolean;
  @Input() replyUser: string = '';
  @Output() displayInput = new EventEmitter<boolean>();
  cf: FormGroup;
  imgURL!: string;
  constructor(private fb: FormBuilder, private cs: CommentService) {
    this.cf = this.fb.group({
      comment: [this.replyUser, Validators.required],
    });
    this.imgURL = this.cs.getUser().img;
  }

  send() {
    this.cs.addComment(
      this.reply,
      this.index,
      this.cf.value.comment,
      this.replyUser
    );
    this.cf.reset();
    this.displayInput.emit(false);
  }
}
