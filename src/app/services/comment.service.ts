import { Injectable } from '@angular/core';

export type Comment = {
  username: string;
  image: string;
  time: number;
  replyUser?: string;
  text: string;
  score: number;
  replies?: Comment[];
};

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private user: string = 'rStrzelczyk';
  private comments: Comment[] = [
    {
      username: 'ellen',
      image: 'https://ui-avatars.com/api/?name=ellen',
      time: Date.now() - 10 ** 8,
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
    return this.comments;
  }

  getUser() {
    return this.user;
  }
}
