import { TestBed } from '@angular/core/testing';

import { EditFormGuard } from './edit-form.guard';

describe('EditFormGuard', () => {
  let guard: EditFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
