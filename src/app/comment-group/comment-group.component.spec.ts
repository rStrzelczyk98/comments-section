import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentGroupComponent } from './comment-group.component';

describe('CommentGroupComponent', () => {
  let component: CommentGroupComponent;
  let fixture: ComponentFixture<CommentGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentGroupComponent]
    });
    fixture = TestBed.createComponent(CommentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
