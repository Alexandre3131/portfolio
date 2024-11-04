import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrige ici
})
export class AppComponent {
  title = 'site-portfolio';
}
