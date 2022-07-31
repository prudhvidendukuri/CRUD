import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items: string[] = ['Prudhvi'];

  addingitems(item: string) {
    this.items.push(item);
  }

  deleting(item) {
    const x = this.items.indexOf(item);
    this.items.slice(x, x + 1);
  }

  constructor() {}
}
