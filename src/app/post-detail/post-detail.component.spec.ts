import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from '../interfaces/Post';
import { PostDetailComponent } from './post-detail.component';

const post: Post = {
  userId: 1,
  id: 1,
  title: 'Test Title',
  body: 'Test Body',
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
    fixture.componentRef.setInput('selected', false);
    fixture.detectChanges();
    expect(component.displayedValue()).toBe('Test Title');
  });

  it('should cycle through post properties when selected', () => {
    fixture.componentRef.setInput('post', post);
    fixture.componentRef.setInput('selected', true);
    fixture.detectChanges();
    // Initial: title
    expect(component.displayedValue()).toBe('Test Title');
    // Next: userId
    component.showNextProperty();
    expect(component.displayedValue()).toBe(1);
    // Next: id
    component.showNextProperty();
    expect(component.displayedValue()).toBe(1);
    // Next: body
    component.showNextProperty();
    expect(component.displayedValue()).toBe('Test Body');
    // Cycle back to title
    component.showNextProperty();
    expect(component.displayedValue()).toBe('Test Title');
  });

  it('should always show title if not selected, even after cycling', () => {
    fixture.componentRef.setInput('post', post);
    fixture.componentRef.setInput('selected', false);
    fixture.detectChanges();
    component.showNextProperty();
    component.showNextProperty();
    expect(component.displayedValue()).toBe('Test Title');
  });

  it('should return empty string if no post', () => {
    fixture.componentRef.setInput('post', undefined as any);
    fixture.componentRef.setInput('selected', true);
    fixture.detectChanges();
    expect(component.displayedValue()).toBe('');
  });
});
