import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router} from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  constructor(private router: ActivatedRoute,
              private route: Router,
              private blogData: BlogService) { }

  ngOnInit() {
    let myBlogId = this.router.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog = this.blogData.getSingleInformation(myBlogId);
  }
}
