import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

import { WPApiService } from '../../services/wp-api.service';
import { PostObject } from './../../post-object';

@Component({
    selector: 'app-posts-single',
    templateUrl: './posts-single.component.html',
    styleUrls: ['./posts-single.component.scss']
})

export class PostsSingleComponent implements OnInit {
    slug: any;
    private sub: any;

    constructor( private api: WPApiService, private route: ActivatedRoute ) {
        this.slug = route.snapshot.params['slug'];
    }

    post : PostObject;

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            if( params['slug'] ) {
                this.initContent(params['slug']);
            }
        });


    }

    initContent( slug ) {
        this.api.getSingle(slug)
            .then( ( res : Response ) => {
                this.post = res[0];
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
