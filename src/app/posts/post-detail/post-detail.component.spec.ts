import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostViewModel } from '../interfaces/PostViewModel';
import { PostDetailComponent } from './post-detail.component';

const post: PostViewModel = {
  userId: 1,
  id: 1,
  title: 'Test Title',
  body: 'Test Body',
  selected: false,
  visibleProperty: 'title',
};

describe('PostDetailComponent', () => {
  let fixture: ComponentFixture<PostDetailComponent>;
  let component: PostDetailComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title by default if not selected', () => {
    fixture.componentRef.setInput('post', post);
    fixture.detectChanges();
    expect(component.displayedValue()).toBe('Test Title');
  });

  it('should always show title if not selected, even after cycling', () => {
    fixture.componentRef.setInput('post', post);
    fixture.detectChanges();
    component.showNextProperty();
    component.showNextProperty();
    expect(component.displayedValue()).toBe('Test Title');
  });

  it('should return empty string if no post', () => {
    fixture.componentRef.setInput(
      'post',
      undefined as unknown as PostViewModel
    );
    fixture.detectChanges();
    expect(component.displayedValue()).toBe('');
  });

  it('should emit the next property when showNextProperty is called', () => {
    fixture.componentRef.setInput('post', post);
    fixture.detectChanges();
    const spy = jest.spyOn(component.changeVisibleProperty, 'emit');
    component.showNextProperty();
    expect(spy).toHaveBeenCalledWith({
      postId: post.id,
      visibleProperty: 'userId',
    });
  });
});
