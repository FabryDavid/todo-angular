import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../classes/todoItem';
import { SubTask } from '../../classes/subTask';
import { Router } from '@angular/router';
import { LocalStorageWorker } from '../../classes/localStorageWorker';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  model = new TodoItem('', '');
  newSubTask = new SubTask('');
  panelOpenState = false;
  localStorageWorker = new LocalStorageWorker();

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  saveItem() {
    this.localStorageWorker.add(this.model);
    this.router.navigateByUrl('/');
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
