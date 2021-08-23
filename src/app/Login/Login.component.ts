import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      passwrd: new FormControl('', [Validators.required]),
    });
    this.form.valueChanges
    .subscribe(value => {
      console.log(value)
    })
  }

  ngOnInit() {
  }

}
