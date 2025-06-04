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
  prix = 699.98;
  user = { nom: 'Alice', age: 25 };
  prenom = 'Loïc';
  dateNaissance = new Date(1992, 19, 4);
}
