import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lbox2Component } from './lbox2.component';

describe('Lbox2Component', () => {
  let component: Lbox2Component;
  let fixture: ComponentFixture<Lbox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lbox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
