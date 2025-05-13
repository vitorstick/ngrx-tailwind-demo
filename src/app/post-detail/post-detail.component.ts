import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent {
  post = input.required<Post>();
  selected = input<boolean>(false);

  private postProperties = ['title', 'userId', 'id', 'body'] as const;
  private currentIndex = signal(0);

  displayedValue = computed(() => {
    const post = this.post();
    if (!post) return '';

    if (!this.selected()) {
      return post['title'];
    }

    const key = this.postProperties[this.currentIndex()];
    return post[key];
  });

  showNextProperty() {
    this.currentIndex.set(
      (this.currentIndex() + 1) % this.postProperties.length
    );
  }
}
