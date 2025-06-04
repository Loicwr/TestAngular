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
  

}
