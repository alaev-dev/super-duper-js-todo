import { LoginPage } from './LoginPage.js';
import { DailyJournalPage } from './DailyJournalPage.js';
import { UserdataStorage } from './UserdataStorage.js';
import { config } from './config.js';

export class PageFactory {
    constructor() {
        this.storage = new UserdataStorage();
    }

    static createInstance() {
        return new PageFactory();
    }

    init() {
        if (this.storage.isUsernameInLocalStorage()) {
            return new DailyJournalPage(config.containerId, this.storage);
        } else {
            return new LoginPage(config.containerId, this.storage);
        }
    }

    createJournalPage() {
        return new DailyJournalPage(config.containerId, this.storage);
    }
}