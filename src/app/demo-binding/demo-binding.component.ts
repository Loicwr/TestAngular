import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  imports: [],
  templateUrl: './demo-binding.component.html',
  styleUrl: './demo-binding.component.scss'
})
export class DemoBindingComponent {
  message = 'Bonjour je suis Angular !';
  imageUrl = 'https://www.grapheine.com/wp-content/uploads/2015/09/nouveau-logo-google-2015.jpg';
  imageLocal = 'assets/img/test.jpeg';
  count = 0;
  increment(){
    this.count++;
  }
  
}

