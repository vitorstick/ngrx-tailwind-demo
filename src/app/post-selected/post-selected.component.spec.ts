import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from '../interfaces/Post';
import { PostSelectedComponent } from './post-selected.component';

describe('PostSelectedComponent', () => {
  let fixture: ComponentFixture<PostSelectedComponent>;
  let component: PostSelectedComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSelectedComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PostSelectedComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nothing if post is null', () => {
    fixture.componentRef.setInput('post', null);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent.trim()).toBe('No post selected.');
  });

  it('should render post details if post is provided', () => {
    const post: Post = {
      userId: 1,
      id: 1,
      title: 'Test Title',
      body: 'Test Body',
    };
    fixture.componentRef.setInput('post', post);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Test Title');
    expect(text).toContain('Test Body');
  });
});
