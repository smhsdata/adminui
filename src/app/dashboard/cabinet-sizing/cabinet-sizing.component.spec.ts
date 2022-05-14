import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetSizingComponent } from './cabinet-sizing.component';

describe('CabinetSizingComponent', () => {
  let component: CabinetSizingComponent;
  let fixture: ComponentFixture<CabinetSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetSizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
