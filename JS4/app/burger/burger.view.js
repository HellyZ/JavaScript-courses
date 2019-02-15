class BurgerView {

  constructor() {
    this._selectors = {
      sizes$: $('.burger__sizes'),
      stuffings$: $('.burger__stuffings'),
      preview$: $('.burger-preview')
    }
    this._templates = {
      size: `
        <label>
          {{viewName}}
          <input name="size" type="radio" value="{{name}}" {{isChecked}}>
        </label>
      `,
      stuffing: `
        <option value="{{name}}">{{viewName}}</option>
      `,
      preview: `
        <div class="burger-preview__size">Size: {{sizeViewName}}</div>
        <div class="burger-preview__stuffing">Stuffing: {{stuffingViewName}}</div>
      `
    }
  }

  renderSizes(sizes) {
    sizes.forEach(size => {
      let template = this._templates.size
        .replace('{{viewName}}', size.viewName)
        .replace('{{name}}', size.name)
        .replace('{{isChecked}}', size.isChecked ? 'checked' : '');
      this._selectors.sizes$.append(template);
    });
  }

  renderStuffings(stuffings) {
    stuffings.forEach(s => {
      let template = this._templates.stuffing
        .replace('{{name}}', s.name)
        .replace('{{viewName}}', s.viewName);
      this._selectors.stuffings$.append(template);
    });
    this._selectors.stuffings$.val(stuffings.find(s => s.isChecked).name)
  }

  renderBurgerData(burgerData) {
    let template = this._templates.preview
      .replace('{{sizeViewName}}', burgerData.size.viewName)
      .replace('{{stuffingViewName}}', burgerData.stuffing.viewName);
    this._selectors.preview$.html(template)
  }

  listenSizeChange(cb) {
    let self = this;
    self._selectors.sizes$.on('change', '[name=size]', function () {
      const sizeName = $(this).val();
      cb(sizeName);
    })
  }

  listenStuffingChange(cb) {
    let self = this;
    self._selectors.stuffings$.on('change', function () {
      const stuffingName = $(this).val();
      cb(stuffingName);
    })
  }
}