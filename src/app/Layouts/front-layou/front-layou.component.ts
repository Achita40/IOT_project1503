import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-front-layou',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterOutlet],
  templateUrl: './front-layou.component.html',
  styleUrl: './front-layou.component.scss'
})
export class FrontLayouComponent {

}
