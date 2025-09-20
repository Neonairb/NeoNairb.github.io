import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    CommonModule
  ]
})
export class App {
  isVisible = false;

  // Nuevo: mensaje especial según la fecha
  showGiftMessage: boolean;

  constructor() {
    const today = new Date();
    const month = today.getMonth() + 1; // Enero=0
    const day = today.getDate();

    // month = 9; // Para pruebas
    // day = 21; // Para pruebas

    // Solo mostrar regalo si es 21 de septiembre
    this.showGiftMessage = (month === 9 && day === 21);

    console.log(`showGiftMessage: ${this.showGiftMessage}`);
  }


  showMessage() {
    this.isVisible = true;
  }
}
