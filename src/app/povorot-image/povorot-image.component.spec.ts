import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PovorotImageComponent } from './povorot-image.component';

describe('PovorotImageComponent', () => {
  let component: PovorotImageComponent;
  let fixture: ComponentFixture<PovorotImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PovorotImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PovorotImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
