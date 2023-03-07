import { TestBed } from '@angular/core/testing';

import { KanatoggleService } from './kanatoggle.service';

describe('KanatoggleService', () => {
  let service: KanatoggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanatoggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
