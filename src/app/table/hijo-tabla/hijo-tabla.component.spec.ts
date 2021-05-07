import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoTablaComponent } from './hijo-tabla.component';

describe('HijoTablaComponent', () => {
  let component: HijoTablaComponent;
  let fixture: ComponentFixture<HijoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
