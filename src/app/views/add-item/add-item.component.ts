import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../classes/todoItem';
import { SubTask } from '../../classes/subTask';
import { ActivatedRoute, Router } from '@angular/router';
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
  sub: any;
  id: string = '';
  localStorageWorker = new LocalStorageWorker();


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id && this.id !== '') {
        const item = this.localStorageWorker.getItemById(this.id);
        if (item) {
          this.model = item;
        } else {
          this.router.navigate(['404']);
        }
      }
    });
  }

  saveItem() {
    if (this.id && this.id !== '') {
      this.localStorageWorker.updateItem(this.model);
    } else {
      this.localStorageWorker.add(this.model);
    }
    this.router.navigate(['todo', this.model.id]);
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
