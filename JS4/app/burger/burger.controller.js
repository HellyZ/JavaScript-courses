class BurgerController {
  constructor(model, view) {
    this._model = model;
    this._view = view;
  }

  init() {

    let self = this;
    this._model.getSizes(function (sizes) {
      self._view.renderSizes(sizes);

    });
    this._model.getStuffings(function (stuffings) {
      self._view.renderStuffings(stuffings);
    })
    this._model.getBurgerData(function (data) {
      self._view.renderBurgerData(data);
    })
    this.listeners();
  }

  listeners() {
    let self = this;
    this._view.listenSizeChange(function (chosenSizeName) {
      self._model.changeSize(chosenSizeName, function (burgerData) {
        self._view.renderBurgerData(burgerData);
      });
    });
    this._view.listenStuffingChange(function (chosenStuffingName) {
      self._model.changeStuffing(chosenStuffingName, function (burgerData) {
        self._view.renderBurgerData(burgerData);
      });
    });
  }
}