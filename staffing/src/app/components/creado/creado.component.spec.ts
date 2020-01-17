import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadoComponent } from './creado.component';

describe('CreadoComponent', () => {
  let component: CreadoComponent;
  let fixture: ComponentFixture<CreadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
