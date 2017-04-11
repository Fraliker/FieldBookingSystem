import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldListViewComponent } from './field-list-view.component';

describe('FieldListViewComponent', () => {
  let component: FieldListViewComponent;
  let fixture: ComponentFixture<FieldListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
