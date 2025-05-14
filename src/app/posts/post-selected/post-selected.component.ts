import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PostViewModel } from '../interfaces/PostViewModel';

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostSelectedComponent {
  post = input.required<PostViewModel | null>();
}
