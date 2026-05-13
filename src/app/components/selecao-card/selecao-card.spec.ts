import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoCard } from './selecao-card';

describe('SelecaoCard', () => {
  let component: SelecaoCard;
  let fixture: ComponentFixture<SelecaoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecaoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SelecaoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
