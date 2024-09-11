import { UserdataStorage } from './UserdataStorage.js';

const loginForm = document.getElementById('input-form')

const storage = new UserdataStorage();
storage.isUsernameInLocalStorage(); //true or false

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('fname').value;
    storage.setUsername(username);
});