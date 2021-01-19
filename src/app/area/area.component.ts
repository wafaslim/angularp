import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
show1 = "pour la valeur"
show2 = "le resultat est"
x =1;
pi = 3.14
y =0;
z:string

  constructor() { }

  ngOnInit(): void {
  }
  cercle() {
  this.y = 2* this.x * this.pi;
  console.log(this.y);
  
}
  carre(){
    this.y = this.x*this.x
  }


}
