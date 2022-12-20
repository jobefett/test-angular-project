import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestAngularProject';
    name = "Bob"
  condition = true;
  if (this.condition){ this.name= "peter"}
}
