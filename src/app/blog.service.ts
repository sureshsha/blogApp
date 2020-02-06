import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpErrorService } from './http-error.service';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;

  public allBlogs = [];

  public baseUrl: 'http://localhost:3000/';

  constructor(private http: HttpClient,
              private httpError: HttpErrorService) { }
// Method to get all blogs data
  public getAllBlogs(): Observable<any> {
    return this.http.get('http://localhost:3000/data')
    .pipe(catchError(this.httpError.handleError));
  }



  // Method to get only particular data
  public getSingleInformation(currentBLogId): Observable<any> {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBLogId) {
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }
}
