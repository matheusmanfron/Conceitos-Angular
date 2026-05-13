import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelecaoCard } from './components/selecao-card/selecao-card';
import { PlacarPartida } from './components/placar-partida/placar-partida';

@Component({
  selector: 'app-root',
  imports: [SelecaoCard, PlacarPartida, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  titulo = 'Dashboard da Copa';
  totalGolsRodada: number = 0;

  placarPartidaA: number = 0;
  placarPartidaB: number = 0;


  listaSelecoes = [
    { pais: 'Alemanha', flag: 'https://flagcdn.com/w320/de.png' },
    { pais: 'Argélia', flag: 'https://flagcdn.com/w320/dz.png' },
    { pais: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png' },
    { pais: 'Arábia Saudita', flag: 'https://flagcdn.com/w320/sa.png' },
    { pais: 'Austrália', flag: 'https://flagcdn.com/w320/au.png' },
    { pais: 'África do Sul', flag: 'https://flagcdn.com/w320/za.png' }
  ];

  registrarGolSelecao(nomeTime: string): void {
    this.totalGolsRodada++;
    if (nomeTime === 'Alemanha'){
      this.placarPartidaA++;
    } else if (nomeTime == 'Argentina'){
      this.placarPartidaB++;
    }
  }

  registrarGolPartida(timeQueMarcou: string): void {
    this.totalGolsRodada++;
  }

}
