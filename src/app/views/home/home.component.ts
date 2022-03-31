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
  filter: string = 'all';
  searchText: string = '';

  constructor() {
    const worker = new LocalStorageWorker();
    this.items = worker.getAllItems();
  }

  ngOnInit(): void {
  }

  getItems() {
    const itemsBasedOnState = this.items.filter((item) => {
      switch (this.filter) {
        case 'done':
          return item.done;
        case 'notDone':
          return !item.done;
        default:
          return true;
      }
    });

    if (!this.searchText || this.searchText === '') {
      return itemsBasedOnState;
    }

    return itemsBasedOnState.filter((item) => {
      const titleIndex = item.title.indexOf(this.searchText);
      const descriptionIndex = item.description.indexOf(this.searchText);

      return titleIndex !== -1 || descriptionIndex !== -1;
    });
  }
}
