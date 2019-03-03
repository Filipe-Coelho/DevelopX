import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BankService } from 'src/app/bank.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private bankService: BankService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      clientIdentification: ['', Validators.required ],
      name: ['', Validators.required ]
   });
  }

  save(angForm: FormGroup) {
    let identification = angForm.get('clientIdentification');
    let name = angForm.get('name');
    this.bankService.createClient(Number(identification.value) , name.value)
    .subscribe(success=>{
      console.log(success);
      alert("Client Saved successfully!");
      this.clearFields();
    },
    error => {
      console.log(error);
      alert("Error to save Client.");
    });
  }
  
  clearFields(){
    this.angForm.get('clientIdentification').setValue('');
    this.angForm.get('name').setValue('');
    this.angForm.reset();
  } 

  ngOnInit() {
  }

}
