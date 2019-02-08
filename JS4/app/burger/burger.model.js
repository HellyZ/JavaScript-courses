class BurgerModel {
  constructor() {
    this._sizes = [{
        id: 'size_small',
        name: 'Small',
        price: 70,
        isChosen: false
      },
      {
        id: 'size_medium',
        name: 'Medium',
        price: 90,
        isChosen: false
      },
      {
        id: 'size_large',
        name: 'Large',
        price: 120,
        isChosen: false
      }
    ]
    this._stuffings = [{
        id: 'stuffing_chicken',
        name: 'Chicken',
        price: 70,
        isChosen: false
      },
      {
        id: 'stuffing_pork',
        name: 'Pork',
        price: 90,
        isChosen: false
      },
      {
        id: 'stuffing_beef',
        name: 'Beef',
        price: 120,
        isChosen: false
      }
    ]
    this._sauces = [{
        id: 'sauce_cheese',
        name: 'Cheese',
        price: 10
      },
      {
        id: 'sauce_bbq',
        name: 'BBQ',
        price: 10
      },
      {
        id: 'sauce_ukr',
        name: 'Ukrainian',
        price: 10
      }
    ]
    this._chosenSize = this._sizes[1].id;
    this._chosenStuffing = this._stuffings[0].id;
    this._chosenSauces = this._sauces[1].id;
  }

  getSizes(cb) {
    // getting sizes from the server ...
    cb(this._sizes);
  }

  getStuffings(cb) {

    cb(this._stuffings);
  }

  getSauces(cb) {
    cb(this._sauces);
  }


  getBurgerData(cb) {
    let burgerData = {
      size: this._sizes.find(s => s.id === this._chosenSize),
      stuffing: this._stuffings.find(s => s.id === this._chosenStuffing),
      sauce: this._sauces.find(s => s.id === this._chosenSauces)
    }
    if (cb) {
      cb(burgerData);
    }
    return burgerData;
  }

  changeSize(sizeId, cb) {
    this._chosenSize = sizeId;
    cb();
  }

  changeStuffing(stuffingId, cb) {
    this._chosenStuffing = stuffingId;
    cb();
  }

  changeSauce(sauceId, cb) {
    this._chosenSauces = sauceId;
    cb();
  }

}