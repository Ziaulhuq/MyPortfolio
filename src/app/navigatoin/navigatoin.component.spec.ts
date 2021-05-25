import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatoinComponent } from './navigatoin.component';

describe('NavigatoinComponent', () => {
  let component: NavigatoinComponent;
  let fixture: ComponentFixture<NavigatoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
