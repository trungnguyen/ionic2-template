import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add'
import { Data } from '../../providers/data';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {
  public todoList: Array<string>;

  constructor(public navCtrl: NavController, public dataService: Data) { }

  ionViewDidLoad() {
    this.dataService.getData().then((todos) => {
      if (todos) {
        this.todoList = JSON.parse(todos);
      }
    });

    if (!this.todoList) {
      this.todoList = [];
    }
  }

  delete(index: number) {
    this.todoList.splice(index, 1);
    this.dataService.save(this.todoList);
  }

  add() {
    this.navCtrl.push(AddPage);
  }

}
