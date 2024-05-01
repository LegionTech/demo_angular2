import { TestBed } from '@angular/core/testing';

import { CrudtodoService } from './crudtodo.service';

describe('CrudtodoService', () => {
  let service: CrudtodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudtodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
