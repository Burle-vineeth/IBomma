import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isAdmin unit test case', () => {
    let admin = {
      username: 'vineeth',
      password: 'vineeth',
    };
    service.isAdmin(admin);
    expect(service.admin).toBeFalsy();
  });

  it('profile unit test case', fakeAsync((done: any) => {
    tick();
    service.profile('kin');
    service.logOut();
    service.firstArguMent.subscribe((g) => {
      expect(g).toBeTruthy();
      done();
    });
  }));
});
