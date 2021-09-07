import { Sort, SortedTasks } from '../components/sort';
import { Task } from '../components/task';
import { LoadMoreButton } from '../components/load-more-button';

import { renderComponent } from '../utils';

import { POSITION_INSERT } from '../const';

class BoardController {
    constructor(component) {
        this._component = component;
        this._container = this._component.element;

        this._sortComponent = new Sort();
        this._loadMoreComponent = new LoadMoreButton();

        this._tasks = [];
    }

    render(tasks) {
        this._tasks = tasks;

        this._renderControl();
        this._renderTasksList(tasks);

        this._setEvents();
    }

    _renderControl() {
        const boardElement = this._container.querySelector('.board');

        renderComponent(boardElement, this._sortComponent, POSITION_INSERT.AFTERBEGIN);
        renderComponent(boardElement, this._loadMoreComponent);
    }

    _renderTasksList(tasks) {
        const taskListElement = this._container.querySelector('.board__tasks');

        tasks.forEach(task => renderComponent(taskListElement, new Task(task)));
    }

    _setEvents() {
        this._sortComponent.setSortTypeChangeHandler((sortType) => {
            const sortTasks = SortedTasks.sort(sortType, this._tasks);
        });
    }
}

export {
    BoardController
}