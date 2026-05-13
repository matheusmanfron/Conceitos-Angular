import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-placar-partida',
  imports: [UpperCasePipe, CommonModule],
  templateUrl: './placar-partida.html',
  styleUrl: './placar-partida.css',
})
export class PlacarPartida {
  @Input() nomeTimeA: string = '';
  @Input() nomeTimeB: string = '';

  @Output() golMarcado = new EventEmitter<string>();

  @Input() placarA: number = 0;
  @Input() placarB: number = 0;

  jogoFinalizado: boolean = false;
  mensagemFinal: string = '';

  adicionarGolA(): void{
    if(!this.jogoFinalizado){
      this.placarA++;
      this.golMarcado.emit(this.nomeTimeA)
    }
  }

  adicionarGolB(): void{
    if(!this.jogoFinalizado){
      this.placarB++;
      this.golMarcado.emit(this.nomeTimeB);
    }
  }

  finalizarPartida(){
    this.jogoFinalizado = true;

    if (this.placarA > this.placarB){
      this.mensagemFinal = 'vencedor: ' + this.nomeTimeA;
    } else if (this.placarB > this.placarA){
      this.mensagemFinal = 'vencedor: ' + this.nomeTimeB;
    }else{
      this.mensagemFinal = 'empate'
    }
  }

}
