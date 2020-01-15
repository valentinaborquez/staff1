import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportestaffComponent } from './reportestaff.component';

describe('ReportestaffComponent', () => {
  let component: ReportestaffComponent;
  let fixture: ComponentFixture<ReportestaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportestaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
