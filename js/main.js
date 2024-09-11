import { PageFactory } from './PageFactory.js'; 

const pageFactory = PageFactory.createInstance();

const init = () => {
    const page = pageFactory.init()
    page.render();
}

const createJournalPage = () => {
    const page = pageFactory.createJournalPage()

    page.render();
}

// Handle login success event
document.addEventListener('loginSuccess', createJournalPage);

window.addEventListener('load', init);