import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteSliderComponent } from './route-slider/route-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouteSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wolddijkse-waanzin';
}
