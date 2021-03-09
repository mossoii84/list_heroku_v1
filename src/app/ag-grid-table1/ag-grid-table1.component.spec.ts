import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridTable1Component } from './ag-grid-table1.component';

describe('AgGridTable1Component', () => {
  let component: AgGridTable1Component;
  let fixture: ComponentFixture<AgGridTable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridTable1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
