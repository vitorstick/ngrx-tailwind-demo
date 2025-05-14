import { createReducer, on } from '@ngrx/store';
import { Post } from '../interfaces/Post';
import { PostProperty, PostViewModel } from '../interfaces/PostViewModel';
import { PostsActions } from './posts.actions';

export interface PostsState {
  posts: PostViewModel[];
  loading: boolean;
  error: unknown | null;
  selectedPost: PostViewModel | null;
}

export const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  selectedPost: null,
};

const mapPostToViewModel = (post: Post): PostViewModel => ({
  ...post,
  selected: false,
  visibleProperty: 'title' as PostProperty,
});

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts.map(mapPostToViewModel),
    loading: false,
  })),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(PostsActions.addPost, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post],
  })),
  on(PostsActions.removePost, (state, { id }) => ({
    ...state,
    posts: state.posts.filter((p) => p.id !== id),
  })),
  on(PostsActions.selectPost, (state, { post }) => ({
    ...state,
    selectedPost: post,
    posts: state.posts.map((p) =>
      p.id === post.id
        ? { ...p, selected: true }
        : { ...p, selected: false, visibleProperty: 'title' as PostProperty }
    ),
  })),
  on(PostsActions.clearSelectedPost, (state) => ({
    ...state,
    selectedPost: null,
  })),
  on(
    PostsActions.changeVisibleProperty,
    (state, { postId, visibleProperty }) => ({
      ...state,
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              visibleProperty,
            }
          : post
      ),

      selectedPost:
        state.selectedPost && state.selectedPost.id === postId
          ? { ...state.selectedPost, visibleProperty }
          : state.selectedPost,
    })
  )
);
