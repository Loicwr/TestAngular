import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { DemoBindingComponent } from "./demo-binding/demo-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DemoBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mon-app';
}
