import { Component, OnInit } from '@angular/core';
import { WPApiService } from '../../services/wp-api.service';

import { PostObject } from './../../post-object';

@Component({
  selector: 'app-posts',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor( private api: WPApiService ) { }

  posts : PostObject[];

  ngOnInit() {
    this.api
        .getPosts( 'download' )
        .subscribe(res => {
          this.posts = res;
        })
  }

}
