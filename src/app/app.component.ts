import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsContainerComponent } from './posts/posts-container/posts-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-tailwind-demo';
}
