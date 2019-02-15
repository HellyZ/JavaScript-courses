class Size {
  constructor(name, viewName, price) {
    this.name = name;
    this.viewName = viewName;
    this.price = price;
    this.isChecked = false;
  }
}


class BurgerModel {
  constructor() {
    this.sizes = [
      new Size('size_small', 'Small', 70),
      new Size('size_medium', 'Medium', 90),
      new Size('size_large', 'Large', 120)
    ]
    this.stuffings = [{
        viewName: 'Chicken',
        name: 'stuffing_chicken',
        price: 70,
        isChecked: false
      },
      {
        viewName: 'Pork',
        name: 'stuffing_pork',
        price: 90,
        isChecked: false
      },
      {
        viewName: 'Beef',
        name: 'stuffing_beef',
        price: 120,
        isChecked: false
      }
    ]
    this.sauces = [{
        name: 'sauce_cheese',
        price: 10
      },
      {
        name: 'sauce_bbq',
        price: 10
      },
      {
        name: 'sauce_ukr',
        price: 10
      }
    ]
    this.sizes[1].isChecked = true;
    this.stuffings[1].isChecked = true;
    this.currentSauces = [];
  }

  getSizes(cb) {
    // make AJAX call .......
    cb(this.sizes);
  }

  getStuffings(cb) {
    // make AJAX call .......
    cb(this.stuffings);
  }

  getBurgerData(cb) {
    let data = {
      size: this.sizes.find(s => s.isChecked),
      stuffing: this.stuffings.find(s => s.isChecked)
    }
    if (cb) {
      cb(data);
    }
    return data;
  }

  changeSize(sizeName, cb) {
    this.sizes.forEach(s => s.isChecked = false);
    this.sizes.find(s => s.name === sizeName).isChecked = true;
    cb(this.getBurgerData());
  }

  changeStuffing(stuffingName, cb) {
    this.stuffings.forEach(s => s.isChecked = false);
    this.stuffings.find(s => s.name === stuffingName).isChecked = true;
    cb(this.getBurgerData());
  }

  addSauce(sauceName) {
    let sauce = this.sauces.find(s => s.name === sauceName);
    let foundSauce = this.currentSauces.find(s => s.name === sauceName);

    !foundSauce ?
      this.currentSauces.push(sauce) :
      console.log('Такой соус уже есть');
  }

  removeSauce(sauceName) {
    let foundSauceIndex = this.currentSauces.findIndex(s => s.name === sauceName);

    foundSauceIndex !== -1 ?
      this.currentSauces.splice(foundSauceIndex, 1) :
      console.log('Такого соуса вообще нет');
  }
}