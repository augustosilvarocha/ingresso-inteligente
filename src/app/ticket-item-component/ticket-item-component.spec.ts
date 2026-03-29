import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketItemComponent } from './ticket-item-component';

describe('TicketItemComponent', () => {
  let component: TicketItemComponent;
  let fixture: ComponentFixture<TicketItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
