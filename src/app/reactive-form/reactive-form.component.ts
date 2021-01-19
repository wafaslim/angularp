import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  title="Informations generales";
  title2="Informations Paiement";
  userForm : FormGroup

  // userForm = new FormGroup({
  //    name : new FormControl, 
  //    email : new FormControl('',,

  //   paymentInformations : new FormGroup({       
  //    typeCarte : new FormControl(),
  //    numero : new FormControl(),
  //    dateExpiration : new FormControl(),
  //    code : new FormControl(),
  //    })
  //   });
   createForm(){
    this.userForm = this.formBuilder.group({
       name : [ '', [Validators.required, Validators.minLength(3)]],
       email: ['',[Validators.required,Validators.email]],
       paymentInformations : this.formBuilder.group({
       typeCarte : ['',Validators.required],
       numero : ['',Validators.minLength(16)],
       dateExpiration : 14/0/21,
       code : 0
      })
     })
   } 

  constructor(private formBuilder: FormBuilder) { 
  }
  ngOnInit(): void {
    this.createForm();
  }
  onSubmit() {
    console.log(this.userForm.value);
  }  
}
