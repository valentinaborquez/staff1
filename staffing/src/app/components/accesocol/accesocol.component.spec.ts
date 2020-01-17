import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesocolComponent } from './accesocol.component';

describe('AccesocolComponent', () => {
  let component: AccesocolComponent;
  let fixture: ComponentFixture<AccesocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
