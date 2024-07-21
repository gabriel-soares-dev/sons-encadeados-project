import { Component } from '@angular/core';
import { SharedModule } from '../app/shared/shared.module';

@Component({
  selector: 'sons-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
