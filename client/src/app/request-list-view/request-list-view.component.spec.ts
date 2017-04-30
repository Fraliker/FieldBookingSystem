import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListViewComponent } from './request-list-view.component';

describe('RequestListViewComponent', () => {
  let component: RequestListViewComponent;
  let fixture: ComponentFixture<RequestListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
