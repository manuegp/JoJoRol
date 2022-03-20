import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateBoxComponent } from './ultimate-box.component';

describe('UltimateBoxComponent', () => {
  let component: UltimateBoxComponent;
  let fixture: ComponentFixture<UltimateBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimateBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
