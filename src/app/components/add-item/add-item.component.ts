import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../classes/todoItem';
import { SubTask } from '../../classes/subTask';
import { addItemAction } from '../../store/actions/todoItem.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  model = new TodoItem('', '', null);
  newSubTask = new SubTask('');
  panelOpenState = false;

  constructor(private store: Store<{ todo: Array<TodoItem> }>) {
  }

  ngOnInit(): void {
  }

  saveItem() {
    console.log(this.model);
    this.store.dispatch(addItemAction({ payload: this.model }));
  }

  addSubTask() {
    this.model.subTasks.push(this.newSubTask);
    this.newSubTask = new SubTask('');
  }

  removeSubtask(subTaskId: string) {
    this.model.removeSubtask(subTaskId);
  }

  removeAllSubtask() {
    this.model.removeAllSubtasks();
  }
}
