import { Sort, SortedTasks } from '../components/sort';
import { LoadMoreButton } from '../components/load-more-button';

import { TaskController } from './task';

import { renderComponent } from '../utils';

import { POSITION_INSERT } from '../const';

class BoardController {
    constructor(component) {
        this._component = component;
        this._container = this._component.element;

        this._sortComponent = new Sort();
        this._loadMoreComponent = new LoadMoreButton();

        this._tasks = [];
        this._taskControllers = [];

        this._onSortTypeChange = this._onSortTypeChange.bind(this);
        this._onDataChange = this._onDataChange.bind(this);
        this._onViewChange = this._onViewChange.bind(this);
    }

    render(tasks) {
        this._tasks = tasks;

        this._renderControl();
        this._renderTasksList();

        this._setEvents();
    }

    _renderControl() {
        const boardElement = this._container.querySelector('.board');

        renderComponent(boardElement, this._sortComponent, POSITION_INSERT.AFTERBEGIN);
        renderComponent(boardElement, this._loadMoreComponent);
    }

    _renderTasksList() {
        const taskListElement = this._container.querySelector('.board__tasks');

        this._taskControllers = this._tasks.map(task => {
            const taskController = new TaskController(taskListElement, this._onDataChange, this._onViewChange);

            taskController.render(task);

            return taskController;
        });
    }

    _setEvents() {
        this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
    }

    _onSortTypeChange(sortType) {
        const sortTasks = SortedTasks.sort(sortType, this._tasks);
    }

    _onDataChange(controller, newDate, oldDate) {
        const index = this._tasks.findIndex(task => task === oldDate);

        if (index === -1) {
            return
        }

        this._tasks = [].concat(this._tasks.slice(0, index), newDate, this._tasks.slice(index + 1));

        controller.rerender();
    }

    _onViewChange() {
        this._taskControllers.forEach(task => task.setDefaultView());
    }
}

export {
    BoardController
}