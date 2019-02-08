class BurgerView {
  constructor(appName) {
    this._appName = appName;
    this._selectors = {
      sizes$: $(`[data-module="${this._appName}"] .burger__sizes`),
      stuffings$: $(`[data-module="${this._appName}"] .burger__stuffings`),
      sauces$: $(`[data-module="${this._appName}"] .burger__sauces`),
      burderData$: $(`[data-module="${this._appName}"] .burger__data`),
    }
    this._templates = {
      sizeInput: `
        <label>
          <input {{isChecked}} name="burger_size" type="radio" value="{{id}}">
          {{name}}
        </label>
      `,
      stuffingDefaultOption: `
        <option value="0">Choose stuffing</option>
      `,
      stuffingOption: `
        <option value="{{id}}">{{name}}</option>
      `,
      saucesDefaultOption: `
       <option value="0">Choose sauces</option>
      `,
      saucesOption: `
        <option value="{{id}}">{{name}}</option>
      `,
      burgerData: `
        <h1>SIZE: {{size}}</h1>
        <h2>STUFFING: {{stuffing}}</h2>
        <h2>SAUCES: {{sauce}}</h2>
      `
    }
  }

  renderSizes(sizes, chosenSize) {
    sizes.forEach(s => {
      let template = this._templates.sizeInput
        .replace('{{name}}', s.name)
        .replace('{{id}}', s.id)
        .replace('{{isChecked}}', s.id === chosenSize.id ? 'checked' : '');
      this._selectors.sizes$.append(template);
    });
  }

  renderStuffings(stuffings, chosenStuffing) {
    this._selectors.stuffings$.append(this._templates.stuffingDefaultOption);
    stuffings.forEach(s => {
      let template = this._templates.stuffingOption
        .replace('{{name}}', s.name)
        .replace('{{id}}', s.id);
      // .replace('{{isChecked}}', s.isChosen ? 'checked' : '');
      this._selectors.stuffings$.append(template);
      if (s.id === chosenStuffing.id) {
        this._selectors.stuffings$.val(s.id);
      }
    })
  }

  renderSauces(sauces, chosenSauce) {
    this._selectors.sauces$.append(this._templates.saucesDefaultOption);
    sauces.forEach(s => {
      let template = this._templates.saucesOption
        .replace('{{name}}', s.name)
        .replace('{{id}}', s.id);
      this._selectors.sauces$.append(template);
      if (s.id === chosenSauce.id) {
        this._selectors.sauces$.val(s.id);
      }
    })
  }

  renderBurgerData(burgerData) {
    let template = this._templates.burgerData
      .replace('{{size}}', burgerData.size.name)
      .replace('{{stuffing}}', burgerData.stuffing.name)
      .replace('{{sauce}}', burgerData.sauce.name)
    this._selectors.burderData$.html(template);
  }

  listenSizeChange(cb) {
    this._selectors.sizes$.on('change', '[name="burger_size"]', function () {
      let id = $(this).val();
      cb(id)
    })
  }

  listenStuffingChange(cb) {
    this._selectors.stuffings$.change(function () {
      let id = $(this).val();
      cb(id);
    })
  }

  listenSauceChange(cb) {
    this._selectors.sauces$.change(function () {
      let id = $(this).val();
      cb(id);
    })
  }

}