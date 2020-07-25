import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trial1';
  email = new FormControl("");
  password = new FormControl("");
  
  signIn(){
    console.log("Email : " + this.email.value);
    console.log("Password : " + this.password.value);
  }
}
