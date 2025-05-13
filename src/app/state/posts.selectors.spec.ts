import { PostsState } from './posts.reducer';
import {
  selectAllPosts,
  selectPostsError,
  selectPostsLoading,
  selectPostsState,
  selectSelectedPost,
} from './posts.selectors';

const mockState: { posts: PostsState } = {
  posts: {
    posts: [
      { userId: 1, id: 1, title: 'Title 1', body: 'Body 1' },
      { userId: 2, id: 2, title: 'Title 2', body: 'Body 2' },
    ],
    loading: true,
    error: 'Some error',
    selectedPost: { userId: 2, id: 2, title: 'Title 2', body: 'Body 2' },
  },
};

describe('Posts Selectors', () => {
  it('should select the posts state', () => {
    expect(selectPostsState(mockState)).toEqual(mockState.posts);
  });

  it('should select all posts', () => {
    expect(selectAllPosts(mockState)).toEqual(mockState.posts.posts);
  });

  it('should select loading', () => {
    expect(selectPostsLoading(mockState)).toBe(true);
  });

  it('should select error', () => {
    expect(selectPostsError(mockState)).toBe('Some error');
  });

  it('should select selectedPost', () => {
    expect(selectSelectedPost(mockState)).toEqual(mockState.posts.selectedPost);
  });
});
