import { Component, OnInit } from '@angular/core';
//import { Router }           from '@angular/router';

import { Item }             from './item';
import { ItemService }      from './item.service';

@Component({
    selector: 'item-list',
    templateUrl: './item-list.component.html',
})


export class ItemListComponent implements OnInit{
    items: Item[];
    selectedItem: Item;

    constructor(
        private itemService: ItemService,) {  }

    getItems(): void {
        this.itemService.getItems()
            .then(items => this.items = items)
    }

    ngOnInit(): void {
        this.getItems();
    }

    onSelect(item: Item): void {
        this.selectedItem = item;
    }

    add(todo: string): void {
        todo = todo.trim();
        if(!todo) {return;}
        this.itemService.create(todo)
            .then(item => {
                this.items.push(item);
                this.selectedItem = null;
            });
    }

    delete(item: Item): void{
        this.itemService
            .delete(item.priority)
            .then(() => {
                this.items = this.items.filter(i => i !== item);
                if (this.selectedItem === item) { this.selectedItem = null; }
            })
    }

}
