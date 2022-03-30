// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export class SubTask {
  private readonly _id: string;

  constructor(
    private _title: string,
    private _done = false
  ) {
    this._id = uuidv4();
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get done(): boolean {
    return this._done;
  }

  set done(value: boolean) {
    this._done = value;
  }

  get id(): string {
    return this._id;
  }
}
