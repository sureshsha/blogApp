import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public allBlogs = [
    {
    "blogId": "1",
    "lastModified": "2017-10-20T12:20:47.854Z",
    "created": "2017-10-20T12:20:47.854Z",
    "tags": [],
    "auth": "admin",
    "category": "comedy",
    "isPublished": true,
    "views": 0,
    "bodyHtml": "this is body",
    "description": "this is description of body",
    "title": "this is test Blog" 
  },
    {
      "blogId": "2",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "auth": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is body",
      "description": "this is description of body",
      "title": "this is test Blog"
}, 
  {
      "blogId": "3",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "auth": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is body",
      "description": "this is description of body",
      "title": "this is test Blog" 
    }
];

  public currentBlog;
  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    let currentBlog = this.router.snapshot.paramMap.get('blogId');
    this.getSingleInformation(currentBlog);
  }

  public getSingleInformation(currentBLog):any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBLog){
        this.currentBlog = blog;

      }
    }
  }

}
