import { createElement } from '../utils';

const createBoardTemplate = () => (
    ` <section class="board container">
        <div class="board__sort-list">
          <a href="#" class="board__sort-item">SORT BY DEFAULT</a>
          <a href="#" class="board__sort-item">SORT BY DATE up</a>
          <a href="#" class="board__sort-item">SORT BY DATE down</a>
        </div>

        <div class="board__tasks"></div>
  </section>`
);

class Board {
    constructor() {
        this._element = null;
    }

    get _template() {
        return createBoardTemplate();
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
    Board
}