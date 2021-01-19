import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {
name = 'toto';
email = 'toto@fivepoints.tn';
adresse = 'rue d\'usine Chotrana Ariana';
hobbies = ['Music','Movies','Sports'];
affich =true;
show="Afficher Hobbies";


  constructor() { }

  ngOnInit(): void {
  }
afficher(){
  if 
    (this.affich)
  {
    this.affich=false;
  this.show="Afficher Hobbies";

  }
  else 
  {
  this.show="Masquer Hobbies"
  this.affich=true
  } 
}
delete(index){
  this.hobbies.splice(index,1)
}
}
