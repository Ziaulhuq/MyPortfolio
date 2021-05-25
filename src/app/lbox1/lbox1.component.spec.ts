import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lbox1Component } from './lbox1.component';

describe('Lbox1Component', () => {
  let component: Lbox1Component;
  let fixture: ComponentFixture<Lbox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lbox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lbox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
