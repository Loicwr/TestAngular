import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-structurelles',
  imports: [CommonModule, ],
  templateUrl: './directives-structurelles.component.html',
  styleUrl: './directives-structurelles.component.scss'
})
export class DirectivesStructurellesComponent {
  isLoggedIn = true;
  isAdmin = false;
  animaux = ['Chat', 'Chien', 'Emerick', 'Lapin', 'Ours'];
  fruits = ['Pomme', 'Cerise', 'Abricot', 'Axel', 'Banane'];
  isVisible = false;
  score = 11;
}
