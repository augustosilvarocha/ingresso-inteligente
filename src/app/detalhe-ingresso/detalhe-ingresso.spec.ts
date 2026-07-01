import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheIngressoComponent } from './detalhe-ingresso';

describe('DetalheIngresso', () => {
  let component: DetalheIngressoComponent;
  let fixture: ComponentFixture<DetalheIngressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheIngressoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheIngressoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
