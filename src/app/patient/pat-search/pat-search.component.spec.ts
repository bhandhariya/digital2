import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatSearchComponent } from './pat-search.component';

describe('PatSearchComponent', () => {
  let component: PatSearchComponent;
  let fixture: ComponentFixture<PatSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
