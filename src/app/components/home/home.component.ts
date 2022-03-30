import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoItem } from '../../classes/todoItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todo$: Observable<Array<TodoItem>>;
  items = [
    new TodoItem('', '', null),
    new TodoItem('', '', null),
    new TodoItem('', '', null)
  ];

  constructor(private store: Store<{ todo: Array<TodoItem> }>) {
    this.todo$ = store.select('todo');
    console.log(this.todo$);
  }

  ngOnInit(): void {
  }
}
