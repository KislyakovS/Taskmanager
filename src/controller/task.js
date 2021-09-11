import { Task } from '../components/task';

import { renderComponent } from '../utils';

class TaskController {
    constructor(container) {
        this._container = container;

        this._taskComponent = null;

        this._onArchiveButtonClick = this._onArchiveButtonClick.bind(this);
        this._onEditButtonClick = this._onEditButtonClick.bind(this);
        this._onFavoritesButtonClick = this._onFavoritesButtonClick.bind(this);
    }

    render(task) {
        this._taskComponent = new Task(task);

        renderComponent(this._container, this._taskComponent);

        this._setEvents();
    }

    _setEvents() {
        this._taskComponent.setArchiveButtonClickHandler(this._onArchiveButtonClick);
        this._taskComponent.setEditButtonClickHandler(this._onEditButtonClick);
        this._taskComponent.setFavoritesButtonClickHandler(this._onFavoritesButtonClick);
    }

    _onArchiveButtonClick() { }

    _onEditButtonClick() { }

    _onFavoritesButtonClick() { }
}

export {
    TaskController,
}