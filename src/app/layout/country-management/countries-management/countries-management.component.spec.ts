import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesManagementComponent } from './countries-management.component';

describe('CountriesManagementComponent', () => {
  let component: CountriesManagementComponent;
  let fixture: ComponentFixture<CountriesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
