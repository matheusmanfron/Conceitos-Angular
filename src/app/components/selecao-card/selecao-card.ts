import { Component, Input, EventEmitter, Output } from '@angular/core';

import { UpperCasePipe } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selecao-card',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './selecao-card.html',
  styleUrl: './selecao-card.css',
})



export class SelecaoCard {
  @Input() nomeTime: string = '';
  @Input() bandeira: string = '';

  @Output() golMarcado = new EventEmitter<string>();

  gols: number = 0;
  gritoDeGuerra: string = 'VAI!!!!!';

  adicionarGol(): void{
    this.gols++;
    this.golMarcado.emit(this.nomeTime);
  }
}
