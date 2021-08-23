import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  url: string = 'https://tutarjeta.herokuapp.com/tarjeta/'
  data: any;


  constructor(private http: HttpClient, private router:Router) {
      this.form = new FormGroup({
      numero_tarjeta: new FormControl('', [Validators.required]),
      security_code: new FormControl('', [Validators.required]),
      fecha_exp: new FormControl('', [Validators.required, Validators.maxLength(7)]),
    });
    this.form.valueChanges
    .subscribe(value => {
      this.data = value;
    });
  }

  ngOnInit() {

  }
  onSubmit(): void{
    //console.log(this.form.controls.identificacion.value);
    this.http.post(this.url+"guardar/"+10618138127, this.data).subscribe(err => {
      console.log(err);
    });

    this.router.navigate([''])
  }
}
