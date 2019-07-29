import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFamilyCreateComponent } from './patient-family-create.component';

describe('PatientFamilyCreateComponent', () => {
  let component: PatientFamilyCreateComponent;
  let fixture: ComponentFixture<PatientFamilyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFamilyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFamilyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
