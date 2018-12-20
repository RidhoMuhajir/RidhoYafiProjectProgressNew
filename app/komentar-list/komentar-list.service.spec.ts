/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KomentarListService } from './komentar-list.service';

describe('Service: KomentarList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KomentarListService]
    });
  });

  it('should ...', inject([KomentarListService], (service: KomentarListService) => {
    expect(service).toBeTruthy();
  }));
});
