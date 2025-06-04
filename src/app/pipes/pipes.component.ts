import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  nom = 'angular';
  aujourdhui = new Date();
}
