import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageWorker } from '../../classes/localStorageWorker';
import { TodoItem } from '../../classes/todoItem';
import { MatSelectionListChange } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {
  item: TodoItem = new TodoItem('', '');
  allComplete: boolean = false;
  private id: string = '';
  private sub: any;
  private localStorageWorker = new LocalStorageWorker();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.reloadTip();
    });
  }

  switchDoneState() {
    this.item.done = !this.item.done;
    this.localStorageWorker.updateItem(this.item);
  }

  reloadTip() {
    const item = this.localStorageWorker.getItemById(this.id);
    if (item) {
      this.item = item;
    } else {
      this.router.navigate(['404']);
    }
  }

  deleteItem() {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.localStorageWorker.removeItem(this.item)) {
          this.router.navigate(['/']);
        }
      }
    });
  }

  updateAllComplete() {
    this.allComplete = this.item.subTasks != null && this.item.subTasks.every(t => t.done);
    this.localStorageWorker.updateItem(this.item);
  }

  someComplete(): boolean {
    if (this.item.subTasks == null) {
      return false;
    }
    return this.item.subTasks.filter(t => t.done).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.item.subTasks == null) {
      return;
    }
    this.item.subTasks.forEach(t => (t.done = completed));
    this.localStorageWorker.updateItem(this.item);
  }
}
