import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  items: string[];
no: Number;
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.calling();
  }

  calling() {
    this.items = this.itemsService.items;
  }
  adding(any: string) {
    this.itemsService.addingitems(any);
    console.log(this.itemsService);
  }
  removing(hi:any){
    // this.no = this.items.indexOf(item)
   console.log(hi)

  }
}
