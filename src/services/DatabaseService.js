export default class DatabaseService {
  constructor(db) {
    this.db = db;
  }

  add(store, data) {
    return this.db.add(store, data);
  }

  transaction(store, data) {
    const tx = this.db.transaction(store, 'readwrite');
    data.forEach(item => {
      tx.store.add(item);
    });

    return tx.done;
  }

  getAll(store) {
    return this.db.getAll(store);
  }
}
