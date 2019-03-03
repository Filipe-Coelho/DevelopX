import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BankService } from 'src/app/bank.service';
import { History } from '../index/History';
import { Client } from '../index/Client';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  adClient: any = {};
  angForm: FormGroup;
  client: Client;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bankservice: BankService,
    private fb: FormBuilder) {
      
    }
    createForm() {
      this.angForm = this.fb.group({
            clientName: [this.client.name, Validators.required ],
            clientIdentifier: [this.client.identifier, Validators.required ]
         });
      }

    updateClient() {
      try {
        this.bankservice.updateClient(
          this.client.id, 
          this.angForm.get('clientName').value, 
          this.angForm.get('clientIdentifier').value).subscribe(success=>{
            console.log(success);
            this.router.navigateByUrl('/clients');
          },
          error => {
            console.log(error);
            alert("Error to update client.");
          });
      } catch (error) {
        alert("Error to update Client.");
      }
     
      // this.route.params.subscribe(params => {
      //     this.adunitservice.updateAdUnit(unit_name, unit_price, params['id']);
      //     this.router.navigate(['index']);
      // });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        let client: Client;
        client = JSON.parse(JSON.stringify(params));
        this.client = client;
        this.createForm();
    });
  }
}
