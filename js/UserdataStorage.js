export class UserdataStorage {
  constructor() {
    this.username = null;

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
  }

  // Метод для записи имени пользователя в localStorage
  saveToLocalStorage() {
    if (this.username !== null) {
      localStorage.setItem('username', this.username);
    }
  }

  // Метод для очистки имени пользователя и удаления его из localStorage
  clearUsername() {
    this.username = null;
    localStorage.removeItem('username');
  }

  // Метод для проверки, что имени нет в localStorage
  isUsernameInLocalStorage() {
    return localStorage.getItem('username') !== null;
  }
}
