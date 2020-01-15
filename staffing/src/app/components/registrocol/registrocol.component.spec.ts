import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocolComponent } from './registrocol.component';

describe('RegistrocolComponent', () => {
  let component: RegistrocolComponent;
  let fixture: ComponentFixture<RegistrocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
