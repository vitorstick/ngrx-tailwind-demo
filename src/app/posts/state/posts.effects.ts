import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PostApiService } from '../services/post-api.service';
import { PostsActions } from './posts.actions';

@Injectable()
export class PostsEffects {
  private actions$ = inject(Actions);
  private api = inject(PostApiService);

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      switchMap(() =>
        this.api.getPosts().pipe(
          map((posts) => PostsActions.loadPostsSuccess({ posts })),
          catchError((error) =>
            of(
              PostsActions.loadPostsFailure({ error: error?.message || error })
            )
          )
        )
      )
    )
  );
}
