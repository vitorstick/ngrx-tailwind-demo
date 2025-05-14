import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostProperty, PostViewModel } from '../interfaces/PostViewModel';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostSelectedComponent } from '../post-selected/post-selected.component';
import { PostsActions } from '../state/posts.actions';
import {
  selectAllPosts,
  selectPostsLoading,
  selectSelectedPost,
} from '../state/posts.selectors';

@Component({
  selector: 'app-posts-container',
  imports: [CommonModule, PostDetailComponent, PostSelectedComponent],
  templateUrl: './posts-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsContainerComponent {
  private store = inject(Store);

  posts$: Observable<PostViewModel[]> = this.store.select(selectAllPosts);
  loading$: Observable<boolean> = this.store.select(selectPostsLoading);
  selectedPost$: Observable<PostViewModel | null> =
    this.store.select(selectSelectedPost);

  constructor() {
    this.store.dispatch(PostsActions.loadPosts());
  }

  onPostSelected(post: PostViewModel) {
    this.store.dispatch(PostsActions.selectPost({ post }));
  }

  onChangeVisibleProperty(postId: number, visibleProperty: PostProperty) {
    this.store.dispatch(
      PostsActions.changeVisibleProperty({ postId, visibleProperty })
    );
  }
}
