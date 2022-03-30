import {Component, OnInit} from '@angular/core';
import {TodoItem} from "../../classes/todoItem";
import {SubTask} from "../../classes/subTask";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  model = new TodoItem('', '', null)
  newSubTask = new SubTask('')
  panelOpenState = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  saveItem() {

  }

  addSubTask() {
    this.model.subTasks.push(this.newSubTask)
    this.newSubTask = new SubTask('')
  }

  removeSubtask(subTaskId: string) {
    this.model.removeSubtask(subTaskId)
  }

  removeAllSubtask() {
    this.model.removeAllSubtasks()
  }
}
