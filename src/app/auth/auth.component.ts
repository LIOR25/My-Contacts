import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm, Form } from "@angular/forms";
import { AuthService } from './auth.service';

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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode) {
      // ....
    }else {

      this.authService.singup(email,password).subscribe(resData => {
        console.log(resData);
      }, error => {
      console.log(error);
      
      });
    }


    form.reset();
  }
}
