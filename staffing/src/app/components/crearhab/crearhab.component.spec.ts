import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearhabComponent } from './crearhab.component';

describe('CrearhabComponent', () => {
  let component: CrearhabComponent;
  let fixture: ComponentFixture<CrearhabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearhabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
