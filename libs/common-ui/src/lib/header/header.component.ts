import { Component, Input } from '@angular/core';

@Component({
  selector: 'recipes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title = 'Hello world';
}
