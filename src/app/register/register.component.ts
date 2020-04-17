import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: string;
  public password: string;
  public email: string;
  constructor() { }

  ngOnInit() {
    this.user = 'Gato'
    this.password = '1543byo'
    this.email = 'hdez.antonio15@gmail.com'
  }

  changing(event : any) {
    this.user = event.target.value;
    console.log(this.user);
  }

}
