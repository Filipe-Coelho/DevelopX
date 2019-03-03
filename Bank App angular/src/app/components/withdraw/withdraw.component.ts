import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BankService } from 'src/app/bank.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  angForm: FormGroup;

  constructor(private bankService: BankService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      clientIdentification: ['', Validators.required ],
      amount: ['', Validators.required ]
   });
  }

  withdraw(clientIdentification, amount) {
    this.bankService.withdraw(amount,clientIdentification)
    .subscribe(success=>{
      console.log(success);
      alert("Withdraw successfully!");
      this.clearFields();
    },
    error => {
      console.log(error);
      alert("Error to withdraw money.");
    });

  }
  clearFields(){
    this.angForm.get('clientIdentification').setValue(' ');
    this.angForm.get('amount').setValue(' ');
    this.angForm.reset();
  } 
  ngOnInit() {
  }

}
