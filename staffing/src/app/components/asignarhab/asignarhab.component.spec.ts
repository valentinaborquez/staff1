import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarhabComponent } from './asignarhab.component';

describe('AsignarhabComponent', () => {
  let component: AsignarhabComponent;
  let fixture: ComponentFixture<AsignarhabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarhabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
