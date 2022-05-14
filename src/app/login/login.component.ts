import { Component, OnInit } from '@angular/core';
import {
  FormsModule, NgForm, AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showError: any;
  showInvalid: any;
  form!: FormGroup;
  submitted = false;
  constructor(public router: Router,private formBuilder: FormBuilder) { }

  loginDetails = {
    'username': "admin",
    'password': "Admin",
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if((this.loginDetails.username === this.form.value.username) && (this.loginDetails.password === this.form.value.password)){
      this.router.navigate(['/dashboard'])
    }else {
           this.showError = true;
        }

    if (this.form.invalid) {
      return;
    }
  }

  // onSignup(form: NgForm) {
  //   // this.loginDetails.username === form.value.email;
  //   // this.loginDetails.password = form.value.password;
  //   // console.log(this.loginDetails);
  //   if (form.valid && (this.loginDetails.username === form.value.email) && (this.loginDetails.password === form.value.password)) {
  //     this.router.navigate(['/dashboard'])
  //   } 
  //   else {
  //     this.showError = true;
  //   }
  // }

}
