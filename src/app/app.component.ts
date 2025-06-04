import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoBindingComponent } from "./demo-binding/demo-binding.component";
import { DirectivesStructurellesComponent } from "./directives-structurelles/directives-structurelles.component";
import { DirectivesDAttributComponent } from "./directives-d-attribut/directives-d-attribut.component";
import { PipesComponent } from "./pipes/pipes.component";
import { FormulairesAvecFormsModuleComponent } from "./formulaires-avec-forms-module/formulaires-avec-forms-module.component";
import { ModuleAngularComponent } from "./module-angular/module-angular.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DemoBindingComponent, DirectivesStructurellesComponent, DirectivesDAttributComponent, PipesComponent, FormulairesAvecFormsModuleComponent, ModuleAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mon-app';
}
