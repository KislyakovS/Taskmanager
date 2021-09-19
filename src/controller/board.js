import { Sort, SortedTasks } from '../components/sort';
import { LoadMoreButton } from '../components/load-more-button';

import { TaskController } from './task';

import { renderComponent } from '../utils';

import { POSITION_INSERT } from '../const';

class BoardController {
    constructor(component, tasksModel) {
        this._component = component;
        this._tasksModel = tasksModel;

        this._container = this._component.element;

        this._sortComponent = new Sort();
        this._loadMoreComponent = new LoadMoreButton();

        this._taskControllers = [];

        this._onSortTypeChange = this._onSortTypeChange.bind(this);
        this._onDataChange = this._onDataChange.bind(this);
        this._onViewChange = this._onViewChange.bind(this);

        this._tasksModel.filterChangeHandler = this._onFilterChange.bind(this);
        this._tasksModel.dataChangeHandler = this._rerenderTasksList.bind(this);
    }

    render() {
        this._renderControl();
        this._renderTasksList();

        this._setEvents();
    }

    _renderControl() {
        const boardElement = this._container.querySelector('.board');

        renderComponent(boardElement, this._sortComponent, POSITION_INSERT.AFTERBEGIN);
        renderComponent(boardElement, this._loadMoreComponent);
    }

    _removeTasksList() {
        this._taskControllers.forEach(task => task.destroy());
        this._taskControllers = [];
    }

    _renderTasksList() {
        const taskListElement = this._container.querySelector('.board__tasks');

        this._taskControllers = this._tasksModel.tasks.map(task => {
            const taskController = new TaskController(taskListElement, this._onDataChange, this._onViewChange);
            taskController.render(task);

            return taskController;
        });
    }

    _rerenderTasksList() {
        this._taskControllers.forEach(task => task.rerender());
    }

    _setEvents() {
        this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
    }

    _onSortTypeChange(sortType) {
        const sortTasks = SortedTasks.sort(sortType, this._tasksModel.tasks);
    }

    _onDataChange(controller, newDate, oldDate) {
        if (!oldDate && newDate) {
            this._tasksModel.addTask(newDate);
        } else if (!newDate) {
            this._tasksModel.removeTask(oldDate.id);
        } else {
            this._tasksModel.updateTask(oldDate.id, newDate);
        }
    }

    _onViewChange() {
        this._taskControllers.forEach(task => task.setDefaultView());
    }

    _onFilterChange() {
        this._removeTasksList();
        this._renderTasksList();
    }
}

export {
    BoardController
}