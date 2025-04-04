import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-route-slider',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './route-slider.component.html',
  styleUrl: './route-slider.component.css'
})
export class RouteSliderComponent {

  defaultValue = 1;
  amount = 1;
  sliderValue = 7.4;

  protected updateValue(event: Event): void {
    this.sliderValue = parseFloat((((event.target as HTMLInputElement).valueAsNumber) * 7.4).toFixed(2));
    this.amount = (event.target as HTMLInputElement).valueAsNumber;
  }
}
