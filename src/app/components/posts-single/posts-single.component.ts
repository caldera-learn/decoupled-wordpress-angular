import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WPApiService } from '../../services/wp-api.service';
import { PostObject } from './../../post-object';

@Component({
  selector: 'app-posts-single',
  templateUrl: './posts-single.component.html',
  styleUrls: ['./posts-single.component.css']
})
export class PostsSingleComponent implements OnInit {
  slug: any;

  constructor( private api: WPApiService, route: ActivatedRoute ) {
    this.slug = route.snapshot.params['slug'];
  }

  post : PostObject;

  ngOnInit() {
    this.api
        .getSingle(this.slug)
        .subscribe(res => {
          this.post = res[0];
        })
  }

}
