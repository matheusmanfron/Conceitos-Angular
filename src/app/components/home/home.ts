import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  @Output() clicar = new EventEmitter<void>();

  clicarBotao(){
    this.clicar.emit()
  }

  @Input() nome = '';

  idButton = "button";
  deveMostrarTitulo = false;
}
