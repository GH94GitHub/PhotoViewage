import { TestBed } from '@angular/core/testing';

import { AuthCanActivateGuardGuard } from './auth-can-activate-guard.guard';

describe('AuthCanActivateGuardGuard', () => {
  let guard: AuthCanActivateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCanActivateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
