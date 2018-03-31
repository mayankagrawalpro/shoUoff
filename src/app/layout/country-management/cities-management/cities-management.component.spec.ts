import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesManagementComponent } from './cities-management.component';

describe('CitiesManagementComponent', () => {
  let component: CitiesManagementComponent;
  let fixture: ComponentFixture<CitiesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
