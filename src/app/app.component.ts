import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, // Add this line to mark the component as standalone
  imports: [RouterModule] // Import necessary modules directly
})
export class AppComponent {
  title = 'my-employee';
}
