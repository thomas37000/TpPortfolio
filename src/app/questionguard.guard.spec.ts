import { TestBed } from '@angular/core/testing';

import { QuestionguardGuard } from './questionguard.guard';

describe('QuestionguardGuard', () => {
  let guard: QuestionguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuestionguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
