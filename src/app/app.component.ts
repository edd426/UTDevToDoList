import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{name}}:</h1>
        <ul class="myList">
            <li *ngFor="let thing of myList"
                [class.selected]="thing === myThing"
                (click)="onSelect(thing)">
                <span class="badge">{{thing.id}}</span>
                <input placeholder="Today I will...">
            </li>
        </ul>
  
  `,
})
export class AppComponent  { 
    name = 'TODO'; 
    myList = THINGS;
    myThing: Thing;

}

export class Thing {
    id: number;
}

const THINGS: Thing[] = [
    { id: 1 }
    { id: 2 }
    { id: 3 }
    { id: 4 }
    { id: 5 }
];
