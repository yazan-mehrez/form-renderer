import {TestBed} from '@angular/core/testing';

import {FormSetService} from './form-set.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FormSetService', () => {
  let service: FormSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FormSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
