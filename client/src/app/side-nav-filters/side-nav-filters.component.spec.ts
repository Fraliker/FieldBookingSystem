import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavFiltersComponent } from './side-nav-filters.component';

describe('SideNavFiltersComponent', () => {
  let component: SideNavFiltersComponent;
  let fixture: ComponentFixture<SideNavFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
