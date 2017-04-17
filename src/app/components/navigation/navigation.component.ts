import { Component, OnInit } from '@angular/core';

import { WPApiService } from '../../services/wp-api.service';
import { PostObject } from './../../post-object';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor( private api: WPApiService ) { }

  posts : PostObject[];

  ngOnInit() {
    this.api
        .getPages()
        .subscribe(res => {
          this.posts = res;
        })
  }

}
