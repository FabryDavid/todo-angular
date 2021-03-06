// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { SubTask } from './subTask';

export class TodoItem {
  get deadline(): Date | null {
    return this._deadline;
  }

  set deadline(value: Date | null) {
    this._deadline = value;
  }

  constructor(
    private _title: string,
    private _description: string,
    private _done = false,
    private _deadline: Date | null = null,
    private _subTasks: Array<SubTask> = [],
    private _id: string = ''
  ) {
    if (this._id === '') {
      this._id = uuidv4();
    }
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get done(): boolean {
    return this._done;
  }

  set done(value: boolean) {
    this._done = value;
  }

  get subTasks(): Array<SubTask> {
    return this._subTasks;
  }

  set subTasks(value: Array<SubTask>) {
    this._subTasks = value;
  }

  get id(): string {
    return this._id;
  }

  public removeSubtask(subtaskId: string) {
    for (let i = 0; i < this._subTasks.length; i++) {
      if (this._subTasks[i].id === subtaskId) {
        this._subTasks.splice(i, 1);
      }
    }
  }

  public removeAllSubtasks() {
    this._subTasks = [];
  }

  public getSubtasksDoneCount() {
    let done = 0;
    this.subTasks.forEach((subTask) => {
      if (subTask.done) {
        done++;
      }
    });

    return done;
  }

  public getDonePercent() {
    if (this.subTasks.length < 1) {
      return 0;
    }

    return this.getSubtasksDoneCount() / this.subTasks.length * 100;
  }
}
