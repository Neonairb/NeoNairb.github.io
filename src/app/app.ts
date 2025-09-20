import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./app.css']
})
export class App {
  isVisible = false;

  showMessage() {
    this.isVisible = true;
  }
}
