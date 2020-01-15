import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearproyectosComponent } from './crearproyectos.component';

describe('CrearproyectosComponent', () => {
  let component: CrearproyectosComponent;
  let fixture: ComponentFixture<CrearproyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearproyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
