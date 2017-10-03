import { Injectable }                   from '@angular/core';
import { Headers, Http }                from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item }                         from './item';

@Injectable()
export class ItemService {
    private itemsUrl = 'api/items'; //URL to web api

    constructor ( private http: Http ) {  }

    getItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(response => response.json().data as Item[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getItem(priority: number): Promise<Item> {
        const url = `${this.itemsUrl}/${priority}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Item)
            .catch(this.handleError);
    }

    private headers = new Headers({'Content-Type': 'application/json'});


    update(item: Item): Promise<Item> {
        const url = `${this.itemsUrl}/${item.priority}`;
        return this.http
            .put(url, JSON.stringify(item), {headers: this.headers})
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    create(todo: string): Promise<Item> {
        return this.http
            .post(this.itemsUrl, JSON.stringify({todo: todo}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Item)
            .catch(this.handleError);
    }

    delete(priority: number): Promise<void> {
        const url = `${this.itemsUrl}/${priority}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}

