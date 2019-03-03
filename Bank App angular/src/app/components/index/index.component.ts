import { Component, OnInit, PipeTransform, ChangeDetectionStrategy } from '@angular/core';
import { BankService } from 'src/app/bank.service';
import { Bank } from './Bank';
import { ApiObject } from '../api.object.compone';
import { History } from './History';
import { forEach } from '@angular/router/src/utils/collection';
import { Note } from './Note';
import { FilterPipeSearch } from '../app.pipe.filter';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  public filter: string;
  totalItems: number;
  listHistory: History[] = [];
  listHistoryFiltered: History[] = null;
  listNote: Note[] = [];
  apiObject: ApiObject;
  filterAmount: string;
  filterName: string;

  constructor(private listBankervice: BankService) { }


  filterByName(name: string) {
    if(!name || name === ''){
      this.listHistoryFiltered = null;
      return;
    }
    let filtered = this.listHistory.filter(item => item.client.name.toLowerCase().match(name.toLowerCase()));
    this.listHistoryFiltered = filtered;
    return filtered;
 }

 filterListHistory(name: string, amount: string) {
   this.filterAmount = amount;
   this.filterName = name;
  
  let listFiltredByName = this.filterByName(name);
  let filtered = [];

  if(listFiltredByName){
    filtered = listFiltredByName.filter(item => item.withdrawAmount.toString().match(amount) );
  }else{
    filtered = this.listHistory.filter(item => item.withdrawAmount.toString().match(amount) );
  }

  this.listHistoryFiltered = filtered;
}
 
  deleteHistory(id) {
    this.listBankervice.deleteHistory(id)
    .subscribe(success=>{
      this.getListHistory();
    },
    error => {
      console.log(error);
      alert("Error to delete History.");
    });
  }

  ngOnInit() {
    this.getListHistory();
  }


  getListHistory(){
    // if(this.listHistoryFiltered != null){
    //   return this.listHistoryFiltered;
    // }
    this.listBankervice
    .getHistory()
    .subscribe(success=>{
      console.log(success.message);
      this.listHistory = JSON.parse(JSON.stringify(success.message));
      this.listHistoryFiltered = this.listHistory;
      this.filterListHistory(this.filterName, this.filterAmount);
    },
    error => {
      console.log(error);
      alert("Error to get History of withdraws.");
    });
  }

}
