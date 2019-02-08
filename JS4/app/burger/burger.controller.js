class BurgerController {
  constructor(model, view) {
    this._model = model;
    this._view = view;
  }

  init() {
    let self = this;
    let initialBurger = this._model.getBurgerData();
    this._model.getSizes(function (sizes) {
      self._view.renderSizes(sizes, initialBurger.size);
    });
    this._model.getStuffings(function (stuffings) {
      self._view.renderStuffings(stuffings, initialBurger.stuffing);
    })
    this._model.getSauces(function (sauces) {
      self._view.renderSauces(sauces, initialBurger.sauce);
    })
    this.burgerData();
    this.listeners();
  }

  burgerData() {
    let self = this;
    this._model.getBurgerData(function (chosenBurger) {
      self._view.renderBurgerData(chosenBurger);
    })
  }

  listeners() {
    let self = this;
    this._view.listenSizeChange(function (newSizeId) {
      self._model.changeSize(newSizeId, function () {
        self.burgerData();
      });
    })
    this._view.listenStuffingChange(function (newStuffingId) {
      self._model.changeStuffing(newStuffingId, function () {
        self.burgerData();
      });
    })
    this._view.listenSauceChange(function (newSauceId) {
      self._model.changeSauce(newSauceId, function () {
        self.burgerData();
      });
    })
  }
}