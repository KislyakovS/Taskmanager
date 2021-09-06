import { Component } from './component';

const createSortTemplate = () => (
    `<div class="board__sort-list">
          <a href="#" class="board__sort-item">SORT BY DEFAULT</a>
          <a href="#" class="board__sort-item">SORT BY DATE up</a>
          <a href="#" class="board__sort-item">SORT BY DATE down</a>
        </div>`
);

class Sort extends Component {
    get _template() {
        return createSortTemplate();
    }

    get currentSort() { }

    setSortTypeChangeHandler(handler) {

    }
}

export {
    Sort
}