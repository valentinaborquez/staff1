import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoadminComponent } from './accesoadmin.component';

describe('AccesoadminComponent', () => {
  let component: AccesoadminComponent;
  let fixture: ComponentFixture<AccesoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
