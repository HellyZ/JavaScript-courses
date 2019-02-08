class App {
  constructor() {
    this.appName = 'burger';
    this.model = new BurgerModel();
    this.view = new BurgerView(this.appName);
    this.controller = new BurgerController(this.model, this.view);
  }
}

const APP = new App();
APP.controller.init();