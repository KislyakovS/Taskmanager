import { Component } from './component';

const SortType = {
    DATE_DOWN: 'date-down',
    DATE_UP: 'date-up',
    DEFAULT: 'default'
}

const createSortTemplate = () => (
    `<div class="board__sort-list">
          <a href="#" class="board__sort-item" data-sort-type="${SortType.DEFAULT}">SORT BY DEFAULT</a>
          <a href="#" class="board__sort-item" data-sort-type="${SortType.DATE_UP}">SORT BY DATE up</a>
          <a href="#" class="board__sort-item" data-sort-type="${SortType.DATE_DOWN}">SORT BY DATE down</a>
        </div>`
);

class Sort extends Component {
    constructor() {
        super()

        this._currentSort = SortType.DEFAULT;
    }

    get _template() {
        return createSortTemplate();
    }

    get currentSort() {
        return this._currentSort;
    }

    setSortTypeChangeHandler(handler) {
        this.element.addEventListener('click', (event) => {
            event.preventDefault();

            if (event.target.tagName !== 'A') {
                return;
            }

            const { sortType } = event.target.dataset;

            if (this._currentSort === sortType) {
                return;
            }

            this._currentSort = sortType;

            handler(sortType);
        });
    }
}

class SortedTasks {
    static dateDown(tasks) {
        return tasks
    }

    static dateUp(tasks) {
        return tasks
    }

    static sort(type, tasks) {
        switch (type) {
            case SortType.DATE_DOWN:
                return SortedTasks.dateDown([...tasks]);
            case SortType.DATE_UP:
                return SortedTasks.dateUp([...tasks]);
            default:
                return tasks;
        }
    }
}

export {
    Sort,
    SortedTasks
}