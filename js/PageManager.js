export class PageManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    loadPage(htmlContent, onPageLoad) {
        this.container.innerHTML = htmlContent;
        if (onPageLoad) {
            onPageLoad();
        }
    }
}