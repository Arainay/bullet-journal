import { openDB } from 'idb';

export default function() {
  return openDB('BulletJournal', 1, {
    upgrade(database) {
      const taskStore = database.createObjectStore('tasks', {
        keyPath: 'id',
        autoIncrement: true
      });
      const ideaStore = database.createObjectStore('ideas', {
        keyPath: 'id',
        autoIncrement: true
      });

      taskStore.createIndex('name', 'name');
      taskStore.createIndex('status', 'status');
      taskStore.createIndex('text', 'text');
      taskStore.createIndex('date', 'date');

      ideaStore.createIndex('name', 'name');
      ideaStore.createIndex('text', 'text');
      ideaStore.createIndex('date', 'date');
    }
  });
}
