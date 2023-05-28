import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-devider',
  templateUrl: './devider.component.html',
  styleUrls: ['./devider.component.css']
})
export class DeviderComponent {
@Input() title='';
}
