import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EndpointserviceService } from '../services/endpointservice.service';

@Component({
  selector: 'app-landingpage',
  imports: [MatIconModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  constructor(public endpoint: EndpointserviceService) { }
}
