import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // template:
  //           `
  //           <h1>Hello</h1>
  //           <button class="colorStyleClass" [style.font-size.px]=20 (click)="onClick()" >Button1</button>
  //           `
})
export class AppComponent {
  name:string = "Welcome to my first app 11";

  public onClick(): void{
  console.log('Button has been clicked');
  }
  public WecomeMessage()
  {

    return "Dear user" + this.name.toUpperCase();
  }
}
