import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Principal',
  templateUrl: './Principal.component.html',
  styleUrls: ['./Principal.component.css']
})
export class PrincipalComponent implements OnInit {

  url: string = 'https://tutarjeta.herokuapp.com/tarjeta/';
  informacion:any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<any>(this.url+"10618138127").subscribe(data => {
      this.informacion = data;
      console.log(this.informacion);
  });
}
borrarTarjeta(id:string){
  this.http.delete(this.url+id);
}
}
