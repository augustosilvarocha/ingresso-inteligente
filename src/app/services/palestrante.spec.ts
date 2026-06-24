import { TestBed } from '@angular/core/testing';

import { Palestrante } from './palestrante';

describe('Palestrante', () => {
  let service: Palestrante;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Palestrante);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
