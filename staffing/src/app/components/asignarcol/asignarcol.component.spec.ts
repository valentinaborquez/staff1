import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarcolComponent } from './asignarcol.component';

describe('AsignarcolComponent', () => {
  let component: AsignarcolComponent;
  let fixture: ComponentFixture<AsignarcolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarcolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
