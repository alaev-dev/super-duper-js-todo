export class UserdataStorage {
  constructor() {
    this.username = null;
    this.todos = [];

    this.loadFromLocalStorage();

    // Автоматическая запись в localStorage при закрытии страницы
    window.addEventListener('beforeunload', () => {
      this.saveToLocalStorage();
    });
  }

  // Метод для установки имени пользователя в оперативную память
  setUsername(username) {
    if (typeof username !== 'string' || username.trim() === '') {
      throw new Error('Имя пользователя должно быть строкой и не может быть пустым.');
    }
    this.username = username;
  }

  addTodo(todo) { 
    if (!this.todos.includes(todo)) {
      this.todos.push(todo)
    }
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo)
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  // Метод для получения имени пользователя
  getUsername() {
    if (this.username === null) {
      throw new Error('Имя пользователя не установлено.');
    }
    return this.username;
  }

  // Метод для загрузки имени пользователя из localStorage
  loadFromLocalStorage() {
    const storedUsername = localStorage.getItem('username');
    
    if (storedUsername) {
      this.username = storedUsername;
    }

    const todosFromStorage = localStorage.getItem('todos');
    this.todos = todosFromStorage ? JSON.parse(todosFromStorage) : [];
  }

  // Метод для записи имени пользователя в localStorage
  saveToLocalStorage() {
    if (this.username !== null) {
      localStorage.setItem('username', this.username);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  // Метод для проверки, что имени нет в localStorage
  isUsernameInLocalStorage() {
    return localStorage.getItem('username') !== null;
  }
}
