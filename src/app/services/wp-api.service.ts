import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { PostObject } from '../post-object';
import { AppConfig } from '../config/app-config';

@Injectable()
export class WPApiService {

  api_url : string;

  constructor( private http: Http ) {
    this.api_url = AppConfig.API_ENDPOINT;
  }

  getPosts() : Observable<PostObject[]> {
    return this.http
        .get( this.api_url + 'wp/v2/posts')
        .map((res: Response) => res.json());
  }

  getSingle(slug): Observable<PostObject> {

    return this.http
        .get( this.api_url + 'wp/v2/posts/' + `?slug=${slug}`)
        .map((res: Response) => res.json());

  }



}
