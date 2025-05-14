import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Post } from '../interfaces/Post';
import { PostProperty, PostViewModel } from '../interfaces/PostViewModel';

export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    'Load Posts': emptyProps(),
    'Load Posts Success': props<{ posts: Post[] }>(),
    'Load Posts Failure': props<{ error: unknown }>(),
    'Add Post': props<{ post: PostViewModel }>(),
    'Remove Post': props<{ id: number }>(),
    'Select Post': props<{ post: PostViewModel }>(),
    'Clear Selected Post': emptyProps(),
    'Change Visible Property': props<{
      postId: number;
      visibleProperty: PostProperty;
    }>(),
  },
});
