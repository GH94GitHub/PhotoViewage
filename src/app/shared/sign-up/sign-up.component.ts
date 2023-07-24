import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup = {} as FormGroup;

  constructor(
    private location: Location,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      repeatPassword: ['', Validators.required ]
    });
  }

  signup(event: Event): void {
    event.preventDefault();
    console.log("Sign up button clicked", "not implemented");
  }

  back(): void {
    this.location.back();
  }
}
