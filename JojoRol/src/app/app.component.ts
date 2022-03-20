import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JojoRol';
  isRGB = false;
  actualizarRGB(e:any){
    console.log('Se ha cambiado a: '+ e)
    this.isRGB = e
  }
}
