import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export type Comment = {
  username: string;
  image: string;
  time: number;
  replyUser?: string;
  text: string;
  score: number;
  replies?: Comment[];
};

export type User = {
  name: string;
  img: string;
};

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private modal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private selectedComment!: { index: number; replyIndex?: number };
  private user: User = {
    name: 'rStrzelczyk',
    img: 'https://ui-avatars.com/api/?name=rStrzelczyk',
  };
  private comments: Comment[] = [
    {
      username: 'ellen',
      image: 'https://ui-avatars.com/api/?name=ellen',
      time: Date.now(),
      text: 'Obcaecati excepturi rerum voluptates. Amet, quod perferendis!',
      score: 5,
      replies: [
        {
          username: 'john',
          image: 'https://ui-avatars.com/api/?name=john',
          time: Date.now(),
          replyUser: '@ellen',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut nemo perferendis totam voluptatibus laboriosam omnis consequatur.',
          score: 7,
        },
        {
          username: 'rStrzelczyk',
          image: 'https://ui-avatars.com/api/?name=rStrzelczyk',
          time: Date.now(),
          replyUser: '@john',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut nemo perferendis totam voluptatibus laboriosam omnis consequatur, ad ullam nihil magni sunt, quasi, obcaecati excepturi rerum voluptates. Amet, quod perferendis.',
          score: 0,
        },
      ],
    },
    {
      username: 'tom',
      image: 'https://ui-avatars.com/api/?name=tom',
      time: Date.now(),
      text: 'Obcaecati excepturi rerum voluptates. Amet, quod perferendis!',
      score: 5,
      replies: [
        {
          username: 'rStrzelczyk',
          image: 'https://ui-avatars.com/api/?name=rStrzelczyk',
          time: Date.now(),
          replyUser: '@tom',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut nemo perferendis totam voluptatibus laboriosam omnis consequatur.',
          score: 7,
        },
      ],
    },
  ];

  constructor() {}

  getComments() {
    return of(this.comments);
  }

  getUser(): User {
    return this.user;
  }

  addComment(reply: boolean, index: number, text: string, replyUser: string) {
    if (reply) {
      this.comments[index].replies?.push({
        username: this.user.name,
        image: this.user.img,
        time: Date.now(),
        replyUser: '@' + replyUser,
        text,
        score: 0,
      });
    } else {
      this.comments.push({
        username: this.user.name,
        image: this.user.img,
        time: Date.now(),
        text,
        score: 0,
        replies: [],
      });
    }
  }

  editComment(index: number, replyIndex: number, comment: string) {
    if (replyIndex !== undefined) {
      this.comments[index].replies!.at(replyIndex)!.text = comment;
    } else {
      this.comments[index].text = comment;
    }
  }

  getComment(index: number, replyIndex?: number) {
    if (replyIndex !== undefined) {
      return of(
        this.comments[index].replies?.at(replyIndex)
      ) as Observable<Comment>;
    } else {
      return of(this.comments[index]);
    }
  }

  private deleteComment() {
    this.selectedComment.replyIndex !== undefined
      ? this.comments[this.selectedComment.index].replies?.splice(
          this.selectedComment.replyIndex,
          1
        )
      : this.comments.splice(this.selectedComment.index, 1);
  }

  getModal() {
    return this.modal.asObservable();
  }

  openModal(index: number, replyIndex?: number) {
    this.selectedComment = { index, replyIndex };
    this.modal.next(true);
  }

  closeModal(del: boolean = false) {
    if (del) this.deleteComment();
    this.modal.next(false);
  }
}
