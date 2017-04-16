import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map'

import { AppConfig } from './config/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  site_data: {};

  constructor( private http: Http ) { }

  ngOnInit() {
    this.http.get(AppConfig.API_ENDPOINT)
        .map( res => res.json() )
        .subscribe( res => this.site_data = res );
  }

}
