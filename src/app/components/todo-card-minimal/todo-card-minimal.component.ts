import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../classes/todoItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-card-minimal',
  templateUrl: './todo-card-minimal.component.html',
  styleUrls: ['./todo-card-minimal.component.scss']
})
export class TodoCardMinimalComponent implements OnInit {
  @Input() todo: TodoItem = new TodoItem('', '');

  constructor(
    public router: Router) {
  }

  ngOnInit(): void {
  }

}
