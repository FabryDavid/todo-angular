import { TodoItem } from './todoItem';
import { SubTask } from './subTask';

export class LocalStorageWorker {
  private readonly localStorageKey = 'todoItems';

  constructor() {
  }

  add(item: TodoItem) {
    const items = this.getAllItems();
    items.push(item);
    localStorage.setItem(this.localStorageKey, JSON.stringify(items));
  }

  getAllItems(): Array<TodoItem> {
    const list = new Array<TodoItem>();

    const localStorageValue = localStorage.getItem(this.localStorageKey);
    const data: TodoItem[] = localStorageValue ? JSON.parse(<string>localStorageValue) : [];

    data.forEach((item) => {
      const subTask: SubTask[] = [];

      item['_subTasks'].forEach((st) => {
        subTask.push(new SubTask(st['_title'], st['_done']));
      });

      const deadline = item['_deadline'] ? new Date(item['_deadline']) : null;

      list.push(new TodoItem(
        item['_title'],
        item['_description'],
        item['_done'],
        deadline,
        subTask,
        item['_id']
      ));
    });

    return list;
  }

  public getItemById(id: string) {
    const allItem = this.getAllItems();
    const itemIndex = allItem.map((x) => x.id).indexOf(id);

    if (itemIndex > -1) {
      return allItem[itemIndex];
    }

    return null;
  }

  public updateItem(item: TodoItem) {
    const items = this.getAllItems();

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        items[i] = item;
        localStorage.setItem(this.localStorageKey, JSON.stringify(items));
        return true;
      }
    }

    return false;
  }

  public removeItem(item: TodoItem) {
    const items = this.getAllItems();
    const itemIndex = items.map((x) => x.id).indexOf(item.id);

    if (itemIndex < 0) {
      return false;
    }

    items.splice(itemIndex, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(items));

    return true;
  }
}
