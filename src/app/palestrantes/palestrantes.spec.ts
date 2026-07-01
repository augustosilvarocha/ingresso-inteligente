import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestrantesComponent } from './palestrantes';

describe('Palestrantes', () => {
  let component: PalestrantesComponent;
  let fixture: ComponentFixture<PalestrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestrantesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PalestrantesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
