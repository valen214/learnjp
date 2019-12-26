/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DriveService } from './drive.service';

describe('Service: Drive', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriveService]
    });
  });

  it('should ...', inject([DriveService], (service: DriveService) => {
    expect(service).toBeTruthy();
  }));
});
