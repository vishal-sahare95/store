import { TestBed } from '@angular/core/testing';

import { InguardGuard } from './inguard.guard';

describe('InguardGuard', () => {
  let guard: InguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
