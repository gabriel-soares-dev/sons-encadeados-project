import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'sons-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testando sons-encadeados-ui ...';
}
