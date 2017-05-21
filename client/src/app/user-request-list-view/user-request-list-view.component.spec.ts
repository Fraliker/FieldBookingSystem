import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestListViewComponent } from './user-request-list-view.component';

describe('UserRequestListViewComponent', () => {
  let component: UserRequestListViewComponent;
  let fixture: ComponentFixture<UserRequestListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRequestListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRequestListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
