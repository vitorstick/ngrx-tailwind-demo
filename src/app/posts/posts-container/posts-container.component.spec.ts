import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Post } from '../interfaces/Post';
import { PostsActions } from '../state/posts.actions';
import {
  selectAllPosts,
  selectPostsLoading,
  selectSelectedPost,
} from '../state/posts.selectors';
import { PostsContainerComponent } from './posts-container.component';

const mockPosts: Post[] = [
  { userId: 1, id: 1, title: 'Title 1', body: 'Body 1' },
  { userId: 2, id: 2, title: 'Title 2', body: 'Body 2' },
];

describe('PostsContainerComponent', () => {
  let fixture: ComponentFixture<PostsContainerComponent>;
  let component: PostsContainerComponent;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsContainerComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectAllPosts, value: mockPosts },
            { selector: selectPostsLoading, value: false },
            { selector: selectSelectedPost, value: null },
          ],
        }),
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    jest.spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(PostsContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select posts from the store', (done) => {
    component.posts$.subscribe((posts) => {
      expect(posts).toEqual(mockPosts);
      done();
    });
  });

  it('should select loading from the store', (done) => {
    component.loading$.subscribe((loading) => {
      expect(loading).toBe(false);
      done();
    });
  });

  it('should select selectedPost from the store', (done) => {
    component.selectedPost$.subscribe((selected) => {
      expect(selected).toBeNull();
      done();
    });
  });

  it('should dispatch loadPosts on load component', () => {
    expect(store.dispatch).toHaveBeenCalledWith(PostsActions.loadPosts());
  });

  it('should dispatch selectPost when onPostSelected is called', () => {
    const post = mockPosts[0];
    component.onPostSelected(post);
    expect(store.dispatch).toHaveBeenCalledWith(
      PostsActions.selectPost({ post })
    );
  });
});
