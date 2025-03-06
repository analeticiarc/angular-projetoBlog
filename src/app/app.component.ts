import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, MenuBarComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
