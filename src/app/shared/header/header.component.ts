import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EndpointserviceService } from '../../services/endpointservice.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public endpoint: EndpointserviceService){}

}
