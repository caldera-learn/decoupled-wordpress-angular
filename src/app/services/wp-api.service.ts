import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/toPromise';

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

	getPages() : Observable<PostObject[]> {
		return this.http
			.get( this.api_url + 'wp/v2/pages')
			.map((res: Response) => res.json());
	}


	getSingle(slug) {

		return this.getSinglePost( slug )
			.then(( res: Response ) => {
				if( 2 < res['_body'].length ) {
					return res.json();
				} else {
					return this.getSinglePage( slug )
						.then((res: Response) => {
							return res.json();
						});
				}
			});

	}

	getSinglePost(slug) {
		return this.http.get( this.api_url + 'wp/v2/posts/' + `?slug=${slug}`)
			.toPromise();
	}

	getSinglePage(slug) {
		return this.http.get( this.api_url + 'wp/v2/pages/' + `?slug=${slug}`)
			.toPromise();
	}



}
