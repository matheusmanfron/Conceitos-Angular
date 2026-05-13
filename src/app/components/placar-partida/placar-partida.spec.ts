import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacarPartida } from './placar-partida';

describe('PlacarPartida', () => {
  let component: PlacarPartida;
  let fixture: ComponentFixture<PlacarPartida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacarPartida],
    }).compileComponents();

    fixture = TestBed.createComponent(PlacarPartida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
