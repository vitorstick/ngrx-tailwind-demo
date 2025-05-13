import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post';
import { PostApiService } from '../services/post-api.service';
import { PostsActions } from './posts.actions';
import { PostsEffects } from './posts.effects';

const post1: Post = { userId: 1, id: 1, title: 'Title 1', body: 'Body 1' };
const post2: Post = { userId: 2, id: 2, title: 'Title 2', body: 'Body 2' };

describe('PostsEffects', () => {
  let actions$: Observable<any>;
  let effects: PostsEffects;
  let api: { getPosts: jest.Mock };

  beforeEach(() => {
    const apiSpy = { getPosts: jest.fn() };
    TestBed.configureTestingModule({
      providers: [
        PostsEffects,
        provideMockActions(() => actions$),
        { provide: PostApiService, useValue: apiSpy },
      ],
    });
    effects = TestBed.inject(PostsEffects);
    api = TestBed.inject(PostApiService) as any;
  });

  it('should dispatch loadPostsSuccess on successful load', () => {
    const posts = [post1, post2];
    const action = PostsActions.loadPosts();
    const outcome = PostsActions.loadPostsSuccess({ posts });

    actions$ = hot('-a-', { a: action });
    api.getPosts.mockReturnValue(cold('-b|', { b: posts }));

    const expected = cold('--c', { c: outcome });
    expect(effects.loadPosts$).toBeObservable(expected);
  });

  it('should dispatch loadPostsFailure on error', () => {
    const error = { message: 'Error!' };
    const action = PostsActions.loadPosts();
    const outcome = PostsActions.loadPostsFailure({ error: error.message });

    actions$ = hot('-a-', { a: action });
    api.getPosts.mockReturnValue(cold('-#|', {}, error));

    const expected = cold('--c', { c: outcome });
    expect(effects.loadPosts$).toBeObservable(expected);
  });
});
