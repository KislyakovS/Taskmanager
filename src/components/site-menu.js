import { createElement } from '../utils';

const createSiteMenuTemplate = () => (
    `<section class="control__btn-wrap">
    <input
      type="radio"
      name="control"
      id="control__new-task"
      class="control__input visually-hidden"
    />
    <label for="control__new-task" class="control__label control__label--new-task">
      + ADD NEW TASK
    </label>
    <input
      type="radio"
      name="control"
      id="control__task"
      class="control__input visually-hidden"
      checked
    />
    <label for="control__task" class="control__label">TASKS</label>
    <input
      type="radio"
      name="control"
      id="control__statistic"
      class="control__input visually-hidden"
    />
    <label for="control__statistic" class="control__label"
      >STATISTICS</label
    >
  </section>`
);

class SiteMenu {
    constructor() {
        this._element = null;
    }

    get _template() {
        return createSiteMenuTemplate();
    }

    get element() {
        if (!this._element) {
            this._element = createElement(this._template);
        }

        return this._element;
    }

    removeElement() {
        this._element = null;
    }
}

export {
    SiteMenu
}