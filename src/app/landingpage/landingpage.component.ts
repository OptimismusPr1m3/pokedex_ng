import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EndpointserviceService } from '../services/endpointservice.service';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-landingpage',
  imports: [MatIconModule, HeaderComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  constructor(public endpoint: EndpointserviceService) { }
}
