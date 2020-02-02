import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
]
  constructor() { }

  ngOnInit() {
  }

}
