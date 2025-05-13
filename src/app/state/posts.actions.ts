import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Post } from '../interfaces/Post';

export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    'Load Posts': emptyProps(),
    'Load Posts Success': props<{ posts: Post[] }>(),
    'Load Posts Failure': props<{ error: any }>(),
    'Add Post': props<{ post: Post }>(),
    'Remove Post': props<{ id: number }>(),
    'Select Post': props<{ post: Post }>(),
    'Clear Selected Post': emptyProps(),
  },
});
