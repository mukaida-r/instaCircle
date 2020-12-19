import { TestBed } from '@angular/core/testing';

import { InvitationGuard } from './invitation.guard';

describe('InvitationGuard', () => {
  let guard: InvitationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InvitationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
