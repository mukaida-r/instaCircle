import { TestBed } from '@angular/core/testing';

import { RouteParamsService } from './route-params.service';

describe('RouteParamsService', () => {
  let service: RouteParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
