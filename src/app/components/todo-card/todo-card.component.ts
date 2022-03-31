import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../classes/todoItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todo: TodoItem = new TodoItem('', '');

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

}
