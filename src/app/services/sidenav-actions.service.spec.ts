import { TestBed } from '@angular/core/testing';

import { SidenavActionsService } from './sidenav-actions.service';

describe('SidenavActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidenavActionsService = TestBed.get(SidenavActionsService);
    expect(service).toBeTruthy();
  });
});
