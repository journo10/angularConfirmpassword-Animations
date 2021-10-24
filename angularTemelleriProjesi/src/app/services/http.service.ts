import { Comments } from './../models/comments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  //Get Request
  apiUrlComment = 'https://jsonplaceholder.typicode.com/comments';
  //Get request with parameters
  apiUrlParameters = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  //Get Request
  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.apiUrlComment);
  }

  //Clear Comment
  getAllClearComment(comment: Comments): Observable<Comments> {
    return this.http.delete<Comments>(this.apiUrlComment + '/' + comment.id);
  }

  //Get request with parameters
  getCommentsByParameters(): Observable<Posts[]> {
    let params1 = new HttpParams().set('userId', '1');
    return this.http.get<Posts[]>(this.apiUrlParameters, { params: params1 });
  }

  //Get request with parameters => Clear Posts
  getAllClearPost(post: Posts): Observable<Posts> {
    return this.http.delete<Posts>(this.apiUrlParameters + '/' + post.id);
  }

  //Post
  getPost(cPost:Comments):Observable<Comments>{
    return this.http.post<Comments>(this.apiUrlComment,cPost);
  }
}
