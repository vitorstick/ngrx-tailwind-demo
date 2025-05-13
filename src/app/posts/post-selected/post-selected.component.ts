import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostSelectedComponent {
  post = input.required<Post | null>();
}
