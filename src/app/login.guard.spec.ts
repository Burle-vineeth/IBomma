import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ActivatedRouteSnapshot,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

describe('LoginGuard', () => {
  let guard: LoginGuard;
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoginService],
    });
    guard = TestBed.inject(LoginGuard);
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('canLoad guard', () => {
    let route: Route = {};
    let obs: UrlSegment[] = [];
    expect(guard.canLoad(route, obs)).toBeTruthy();
  });
});
