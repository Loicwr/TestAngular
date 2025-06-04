import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaires-avec-forms-module',
  imports: [FormsModule],
  templateUrl: './formulaires-avec-forms-module.component.html',
  styleUrl: './formulaires-avec-forms-module.component.scss'
})
export class FormulairesAvecFormsModuleComponent {
  prenom = '';
  onSubmit() {
    console.log("Formulaire envoyé :", this.prenom);
    
  }

}
