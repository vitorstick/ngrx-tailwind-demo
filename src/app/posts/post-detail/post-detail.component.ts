import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  computed,
  input,
  signal,
} from '@angular/core';
import {
  PostProperty,
  PostViewModel,
  postProperties,
} from '../interfaces/PostViewModel';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent {
  post = input.required<PostViewModel>();

  @Output() changeVisibleProperty = new EventEmitter<{
    postId: number;
    visibleProperty: PostProperty;
  }>();

  private postProperties = postProperties;
  private currentIndex = signal(0);

  displayedValue = computed(() => {
    const post = this.post();
    if (!post) return '';

    return post[post.visibleProperty];
  });

  showNextProperty() {
    const post = this.post();
    if (!post) return;

    const currentPropertyIndex = this.postProperties.indexOf(
      post.visibleProperty
    );
    const nextIndex = (currentPropertyIndex + 1) % this.postProperties.length;
    const nextProperty = this.postProperties[nextIndex];

    this.changeVisibleProperty.emit({
      postId: post.id,
      visibleProperty: nextProperty,
    });
  }
}
