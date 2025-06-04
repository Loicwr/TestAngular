import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-d-attribut',
  imports: [CommonModule],
  templateUrl: './directives-d-attribut.component.html',
  styleUrl: './directives-d-attribut.component.scss'
})
export class DirectivesDAttributComponent {
  isError = true;
  styleObject = {
    'color': 'blue',
    'font-size': '20px',
    'background-color' : 'lightyellow'
  };
  isImportant = true;
  isActive = true;
  isHighlighted = false;
}
