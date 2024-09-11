import { UserdataStorage } from './UserdataStorage.js';
import { PageManager } from './PageManager.js';

export class LoginPage {
    constructor(containerId, storage) {
        this.storage = storage;
        this.pageManager = new PageManager(containerId);
    }

    render() {
        this.pageManager.loadPage(`
            <div class="container">
                <h1 class="center-element">Ежедневник</h1>
                <form class="input-form" id="input-form">
                    <label class="greetings">Привет,</label><br>
                    <input type="text" id="fname" name="fname" placeholder="Введите никнейм">
                    <input type="submit" value="Next">
                </form>
            </div>
        `, () => this.setupForm());
    }

    setupForm() {
        const loginForm = document.getElementById('input-form');
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('fname').value;
            this.storage.setUsername(username);
            // Notify that login is complete
            document.dispatchEvent(new Event('loginSuccess'));
        });
    }
}
