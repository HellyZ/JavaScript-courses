class App {
  constructor() {
    this.model = new BurgerModel();
    this.view = new BurgerView();
    this.controller = new BurgerController(this.model, this.view);
    // this.burgerModule = new BurgerModule();
  }

  init() {
    // this.burgerModule.init();
    this.controller.init();
  }
}

const APP = new App();
APP.init();