import { TestBed } from '@angular/core/testing';

import { LogoAPIService } from './logo-api.service';

describe('LogoAPIService', () => {
  let service: LogoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
