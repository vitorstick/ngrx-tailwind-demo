import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post';

@Injectable({ providedIn: 'root' })
export class PostApiService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(limit = 100): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}?_limit=${limit}`);
  }
}
