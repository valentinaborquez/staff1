import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucolComponent } from './menucol.component';

describe('MenucolComponent', () => {
  let component: MenucolComponent;
  let fixture: ComponentFixture<MenucolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
