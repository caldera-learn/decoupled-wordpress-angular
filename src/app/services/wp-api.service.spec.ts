/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WpApiService } from './wp-api.service';

describe('WpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpApiService]
    });
  });

  it('should ...', inject([WpApiService], (service: WpApiService) => {
    expect(service).toBeTruthy();
  }));
});
