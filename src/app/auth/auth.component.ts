import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: "auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

//   form: FormGroup = new FormGroup({
//     email: new FormControl(""),
//     password: new FormControl(""),
//   });
  constructor() {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
console.log(form.value);
form.reset();

  }
}
