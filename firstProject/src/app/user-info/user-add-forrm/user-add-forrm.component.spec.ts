import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddForrmComponent } from './user-add-forrm.component';

describe('UserAddForrmComponent', () => {
  let component: UserAddForrmComponent;
  let fixture: ComponentFixture<UserAddForrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddForrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddForrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
