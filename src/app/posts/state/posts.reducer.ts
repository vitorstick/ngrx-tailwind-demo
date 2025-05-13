import { createReducer, on } from '@ngrx/store';
import { Post } from '../interfaces/Post';
import { PostsActions } from './posts.actions';

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: unknown | null;
  selectedPost: Post | null;
}

export const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  selectedPost: null,
};

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
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
  })),
  on(PostsActions.clearSelectedPost, (state) => ({
    ...state,
    selectedPost: null,
  }))
);
