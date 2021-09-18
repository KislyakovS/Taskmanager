import { encode } from 'he';

import { SmartComponent } from './smart-component';

import { MONTH_NAMES, COLORS } from '../const';

const createColorMarkup = (name, isChecked) => {
    return (`
              <input
                type="radio"
                id="color-${name}-4"
                class="card__color-input card__color-input--${name} visually-hidden"
                name="color"
                value="${name}"
                ${isChecked ? "checked" : ""}
              />
              <label
                for="color-${name}-4"
                class="card__color card__color--${name}">
                ${name}
              </label>
  `);
}

const createDayMarkup = (name, isChecked) => {
    return (`
    <input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${name}-4"
      name="repeat"
      value="${name}"
      ${isChecked ? "checked" : ""}
    />
    <label class="card__repeat-day" for="repeat-${name}-4">
      ${name}
    </label>
  `)
}

const createTaskEditTemplate = (task) => {
    const { text, dueDate, repeatingDays, color, isRepeat, isDate } = task;

    const isExpired = dueDate instanceof Date && dueDate < Date.now();

    const date = isDate ? `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}` : '';
    const time = isDate ? `${dueDate.getHours()}:${dueDate.getMinutes()}` : '';

    const classRepeat = isRepeat ? "card--repeat" : "";
    const classDeadline = isExpired ? "card--deadline" : "";

    const colorsMarkup = COLORS.map((item) => createColorMarkup(item, item === color)).join("");
    const weekMarkup = Object.entries(repeatingDays).map(([name, value]) => createDayMarkup(name, value)).join("");

    return (`<article class="card card--edit card--${color} ${classRepeat} ${classDeadline}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >${encode(text)}</textarea>
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">${isDate ? 'yes' : 'no'}</span>
              </button>
              ${isDate ? `
              <fieldset class="card__date-deadline">
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder=""
                    name="date"
                    value="${date} ${time}"
                  />
                </label>
              </fieldset>
              ` : ''}
              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">${isRepeat ? "yes" : "no"}</span>
              </button>

              ${isRepeat ?
            `<fieldset class="card__repeat-days">
                    <div class="card__repeat-days-inner">
                        ${weekMarkup}
                    </div>
                </fieldset>` : ''
        }           
            </div>
          </div>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              ${colorsMarkup}
            </div>
          </div>
          </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`);
}

class TaskEditor extends SmartComponent {
    constructor(task) {
        super();

        this._task = task;

        this._submitFormHandler = null;
        this._toggleDateHandler = null;
        this._toggleRepeatHandler = null;
    }

    get _template() {
        return createTaskEditTemplate(this._task);
    }

    _removeEvents() {
        this.element.querySelector('form').removeEventListener('submit', this._submitFormHandler);
        this.element.querySelector('.card__date-deadline-toggle').removeEventListener('click', this._toggleDateHandler);
        this.element.querySelector('.card__repeat-toggle').removeEventListener('click', this._toggleRepeatHandler);
    }

    _setEvents() {
        this.element.querySelector('form').addEventListener('submit', this._submitFormHandler);
        this.element.querySelector('.card__date-deadline-toggle').addEventListener('click', this._toggleDateHandler);
        this.element.querySelector('.card__repeat-toggle').addEventListener('click', this._toggleRepeatHandler);
    }

    setSubmitFormHandler(handler) {
        this._submitFormHandler = handler;
        this.element.querySelector('form').addEventListener('submit', handler);
    }

    setClickToggleDateHandler(handler) {
        this._toggleDateHandler = handler;
        this.element.querySelector('.card__date-deadline-toggle').addEventListener('click', handler);
    }

    setClickToggleRepeatHandler(handler) {
        this._toggleRepeatHandler = handler;
        this.element.querySelector('.card__repeat-toggle').addEventListener('click', handler);
    }
}

export {
    TaskEditor
}