class App {
    constructor(){
        this.repositories = [];
        this.formElement = document.getElementbyId('repo-form');
    }
}

const app = new App()
console.log(app.formElement)
