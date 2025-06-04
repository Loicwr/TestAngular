import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { DemoBindingComponent } from "./demo-binding/demo-binding.component";
import { DirectivesStructurellesComponent } from "./directives-structurelles/directives-structurelles.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DemoBindingComponent, DirectivesStructurellesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mon-app';
}
