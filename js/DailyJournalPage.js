import { PageManager } from './PageManager.js';

export class DailyJournalPage {
    constructor(containerId, storage) {
        this.pageManager = new PageManager(containerId);
        this.storage = storage;
    }

    render() {
        this.pageManager.loadPage(`
            <div class="container">
                <h1 class="center-element">Ваши дела, ${this.storage.getUsername()}</h1>
                <form id="todo-form" class="input-form">
                    <input type="text" id="todo-input" placeholder="Введите новое дело" />
                    <input type="submit" value="Добавить" />
                </form>
                <ul id="todo-list"></ul>
            </div>
        `, () => this.setupForm());
    }

    setupForm() {
        const todoForm = document.getElementById('todo-form');
        const todoInput = document.getElementById('todo-input');
        const todoList = document.getElementById('todo-list');

        this.storage.todos.forEach(element => {
            this.addTodo(element, todoList)
        });

        // Событие добавления нового дела
        todoForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const todoText = todoInput.value.trim();
            if (todoText) {
                this.addTodo(todoText, todoList);
                this.storage.addTodo(todoText)

                todoInput.value = ''; // Очистить поле ввода
            }
        });
    }

    // Функция для добавления дела в список
    addTodo(text, todoList) {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
                <input type="checkbox" />
                <span>${text}</span>
                <button class="delete-btn">Удалить</button>
            `;
        todoItem.querySelector('input').addEventListener('change', (event) => {
            if (event.target.checked) {
                todoItem.querySelector('span').style.textDecoration = 'line-through';
            } else {
                todoItem.querySelector('span').style.textDecoration = 'none';
            }
        });
        todoItem.querySelector('.delete-btn').addEventListener('click', () => {
            this.storage.removeTodo(todoItem.querySelector('span').textContent);
            todoItem.remove();
        });
        todoList.appendChild(todoItem);
    };
}
