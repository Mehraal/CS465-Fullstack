import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TripListing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Travlr Gateways Admin!');
}
