import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  name: string = 'Jan';
  name2: string = '';
  showP: boolean = true;

  userArray: User[] = [
    new User('Jan', 'Nowak', 30, 'Krakow'),
    new User('Ola', 'Wrona', 20, 'Olsztyn'),
    new User('Ula', 'Klucz', 55, 'Pila')
  ]


  isDisabled(): boolean {
    if(this.name=='Jan'){
      return false;
    }
    return true;
  }

  deleteUser(){
    this.name = '';
  }

  onSubmit(f: NgForm){
    // console.log(f);
    console.log(f);
    let user: User = new User(
      f.value.firstName,
      f.value.lastName,
      f.value.age,
      f.value.city
    );
  this.userArray.push(user);
  f.reset();
    // console.log(user);
  }

  showPrimary(age: number): boolean {
    if(age>40) {
      return true;
    }
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
