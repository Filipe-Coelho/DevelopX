import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/bank.service';
import { ApiObject } from '../api.object.compone';
import { Client } from '../index/Client';
import { FilterPipeSearch } from '../app.pipe.filter';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  listClient: Client[];
  apiObject: ApiObject;
  clients: Client[];

  listClientFiltered: Client[] = null;
  filterIdentifier: string;
  filterName: string;
  private pipeFilter: FilterPipeSearch = new FilterPipeSearch;

  constructor(private bankervice: BankService) { }


  filterByName(name: string) {
    if(!name || name === ''){
      this.listClientFiltered = null;
      return;
    }
    let filtered =  this.clients.filter(item => item.name.toLowerCase().match(name.toLowerCase()));
    this.listClientFiltered = filtered;
    return filtered;
 }

 filterListClient(name: string, identifier: string) {
   this.filterIdentifier = identifier;
   this.filterName = name;
  
  let listFiltredByName = this.filterByName(name);
  let filtered = [];

  if(listFiltredByName){
    filtered = listFiltredByName.filter(item => item.identifier.toString().match(identifier) );
  }else{
    filtered = this.clients.filter(item => item.identifier.toString().match(identifier) );
  }

  this.listClientFiltered = filtered;
}



  deleteClient(id) {
    this.bankervice.deleteClient(id).subscribe(success=>{
      console.log('Deleted');
      console.log(success);
      this.getListClients();
    },
    error => {
      console.log(error);
      alert("Error to delete Client.");
    });

  }

  ngOnInit() {
    this.getListClients();
  }

  getListClients(){
    this.bankervice
        .getListClients()
        .subscribe(success=>{
          this.clients = success.message;
          this.listClientFiltered = this.clients;
          this.filterListClient(this.filterName, this.filterIdentifier);
        },
        error => {
          console.log(error);
          alert("Error to get Clients.");
        });
  }

}
