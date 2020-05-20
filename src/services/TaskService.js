import DatabaseService from './DatabaseService';

export default class TaskService extends DatabaseService {
  getTasks() {
    return this.getAll('tasks');
  }

  addTask(task) {
    return this.add('tasks', task);
  }
}
