import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../classes/todoItem';
import { LocalStorageWorker } from '../../classes/localStorageWorker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: TodoItem[] = [];

  constructor() {
    const worker = new LocalStorageWorker();
    this.items = worker.getAllItems();
  }

  ngOnInit(): void {
  }
}
