import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaridiomaComponent } from './asignaridioma.component';

describe('AsignaridiomaComponent', () => {
  let component: AsignaridiomaComponent;
  let fixture: ComponentFixture<AsignaridiomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaridiomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaridiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
