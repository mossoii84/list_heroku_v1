import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lift1Component } from './lift1.component';

describe('Lift1Component', () => {
  let component: Lift1Component;
  let fixture: ComponentFixture<Lift1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lift1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lift1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
