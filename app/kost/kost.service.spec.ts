import { TestBed, async, inject } from '@angular/core/testing';
import { KostService } from './kost.service';

describe('Service: Kost', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KostService]
    });
  });

  it('should ...', inject([KostService], (service: KostService) => {
    expect(service).toBeTruthy();
  }));
});
