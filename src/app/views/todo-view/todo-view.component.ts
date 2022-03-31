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
  id: string = '';
  private sub: any;
  localStorageWorker = new LocalStorageWorker();

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

  onListSelectionChange(ob: MatSelectionListChange) {
    const selectedItems = ob.source.selectedOptions.selected.map((x) => {
      return {
        id: x.value,
        done: true
      };
    });

    const selectedIds = selectedItems.map((x) => x.id);

    for (let i = 0; i < this.item.subTasks.length; i++) {
      this.item.subTasks[i].done = selectedIds.includes(this.item.subTasks[i].id);
    }

    this.localStorageWorker.updateItem(this.item);
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
}
