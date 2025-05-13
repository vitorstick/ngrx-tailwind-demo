import { Post } from '../interfaces/Post';
import { PostsActions } from './posts.actions';
import { initialState, postsReducer, PostsState } from './posts.reducer';

describe('postsReducer', () => {
  const post1: Post = { userId: 1, id: 1, title: 'Title 1', body: 'Body 1' };
  const post2: Post = { userId: 2, id: 2, title: 'Title 2', body: 'Body 2' };

  it('should return the initial state', () => {
    expect(postsReducer(undefined, { type: '' } as any)).toEqual(initialState);
  });

  it('should set loading true on loadPosts', () => {
    const state = postsReducer(initialState, PostsActions.loadPosts());
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should set posts and loading false on loadPostsSuccess', () => {
    const state = postsReducer(
      { ...initialState, loading: true },
      PostsActions.loadPostsSuccess({ posts: [post1, post2] })
    );
    expect(state.posts).toEqual([post1, post2]);
    expect(state.loading).toBe(false);
  });

  it('should set error and loading false on loadPostsFailure', () => {
    const error = 'Error!';
    const state = postsReducer(
      { ...initialState, loading: true },
      PostsActions.loadPostsFailure({ error })
    );
    expect(state.error).toBe(error);
    expect(state.loading).toBe(false);
  });

  it('should add a post on addPost', () => {
    const state = postsReducer(
      initialState,
      PostsActions.addPost({ post: post1 })
    );
    expect(state.posts).toContain(post1);
  });

  it('should remove a post on removePost', () => {
    const stateWithPosts: PostsState = {
      ...initialState,
      posts: [post1, post2],
    };
    const state = postsReducer(
      stateWithPosts,
      PostsActions.removePost({ id: 1 })
    );
    expect(state.posts).toEqual([post2]);
  });

  it('should set selectedPost on selectPost', () => {
    const state = postsReducer(
      initialState,
      PostsActions.selectPost({ post: post1 })
    );
    expect(state.selectedPost).toEqual(post1);
  });

  it('should clear selectedPost on clearSelectedPost', () => {
    const stateWithSelected: PostsState = {
      ...initialState,
      selectedPost: post1,
    };
    const state = postsReducer(
      stateWithSelected,
      PostsActions.clearSelectedPost()
    );
    expect(state.selectedPost).toBeNull();
  });
});
