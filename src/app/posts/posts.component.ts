import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostSelectedComponent } from '../post-selected/post-selected.component';
import { PostsActions } from '../state/posts.actions';
import {
  selectAllPosts,
  selectPostsLoading,
  selectSelectedPost,
} from '../state/posts.selectors';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, PostDetailComponent, PostSelectedComponent],
  templateUrl: './posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  private store = inject(Store);

  posts$: Observable<Post[]> = this.store.select(selectAllPosts);
  loading$: Observable<boolean> = this.store.select(selectPostsLoading);
  selectedPost$: Observable<Post | null> =
    this.store.select(selectSelectedPost);

  constructor() {
    this.store.dispatch(PostsActions.loadPosts());
  }

  onPostSelected(post: Post) {
    this.store.dispatch(PostsActions.selectPost({ post }));
  }
}
