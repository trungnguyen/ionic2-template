import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';


@Component({
    selector: 'page-add',
    templateUrl: 'add.html'
})
export class AddPage {

    public todoList: Array<string>;
    public todoItem: string;

    constructor(private nav: NavController, public view: ViewController, public dataService: Data) {
        this.todoItem = "";

        this.dataService.getData().then((todos) => {
            if (todos) {
                this.todoList = JSON.parse(todos);
            }
        });

        if (!this.todoList) {
            this.todoList = [];
        }
  }

    save() {
        if (this.todoItem != "") {
            this.todoList.push(this.todoItem);
            this.dataService.save(this.todoList);
            this.nav.pop();
        }
    }

    close() {
        this.view.dismiss();
    }
}
