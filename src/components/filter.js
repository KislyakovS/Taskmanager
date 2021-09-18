import { Component } from './component';

const createFilterMarkup = (filter) => {
    const { name, count, checked } = filter;

    return `
      <input
          type="radio"
          id="filter__${name}"
          class="filter__input visually-hidden"
          name="filter"
          ${checked ? 'checked' : ''}
          data-type="${name}"
        />
        <label for="filter__${name}" class="filter__label">
          ${name} <span class="filter__all-count">${count}</span>
        </label>
  `
}

const createFilterTemplate = (filters) => {
    const filtersTemplate = filters.map(filter => createFilterMarkup(filter)).join('');

    return (
        `<section class="main__filter filter container">${filtersTemplate}</section>`
    );
};

class Filter extends Component {
    constructor(filters) {
        super();
        this._filters = filters;
    }

    get _template() {
        return createFilterTemplate(this._filters);
    }

    setFilterChangeHandler(handler) {
        this.element.addEventListener('change', (event) => {
            const { type } = event.target.dataset;

            handler(type);
        });
    }
}

export {
    Filter
}