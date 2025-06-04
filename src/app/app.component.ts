import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { DemoBindingComponent } from "./demo-binding/demo-binding.component";
import { DirectivesStructurellesComponent } from "./directives-structurelles/directives-structurelles.component";
import { DirectivesDAttributComponent } from "./directives-d-attribut/directives-d-attribut.component";
import { PipesComponent } from "./pipes/pipes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DemoBindingComponent, DirectivesStructurellesComponent, DirectivesDAttributComponent, PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mon-app';
}
