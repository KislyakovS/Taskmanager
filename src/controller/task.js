import { Task } from '../components/task';
import { TaskEditor } from '../components/task-editor';

import { renderComponent, replaceComponent } from '../utils';

class TaskController {
    constructor(container, onViewChange) {
        this._container = container;
        this._onViewChange = onViewChange;

        this._task = null;
        this._taskComponent = null;
        this._taskEditorComponent = null;

        this._onArchiveButtonClick = this._onArchiveButtonClick.bind(this);
        this._onEditButtonClick = this._onEditButtonClick.bind(this);
        this._onFavoritesButtonClick = this._onFavoritesButtonClick.bind(this);

        this._onEditorFormSubmit = this._onEditorFormSubmit.bind(this);
        this._onEscKeyDown = this._onEscKeyDown.bind(this);
    }

    render(task) {
        this._taskComponent = new Task(task);
        this._taskEditorComponent = new TaskEditor(task);

        renderComponent(this._container, this._taskComponent);

        this._setEvents();
    }

    _setEvents() {
        this._taskComponent.setArchiveButtonClickHandler(this._onArchiveButtonClick);
        this._taskComponent.setEditButtonClickHandler(this._onEditButtonClick);
        this._taskComponent.setFavoritesButtonClickHandler(this._onFavoritesButtonClick);

        this._taskEditorComponent.setSubmitFormHandler(this._onEditorFormSubmit);
    }

    _onArchiveButtonClick() { }

    _onEditButtonClick() {
        this._onViewChange();

        this.showEditor();
    }

    _onFavoritesButtonClick() { }

    _onEditorFormSubmit(event) {
        event.preventDefault();

        this.hiddenEditor();
    }

    _onEscKeyDown(event) {
        if (event.key === 'Escape') {
            this.hiddenEditor();
        }
    }

    showEditor() {
        replaceComponent(this._taskEditorComponent, this._taskComponent);

        document.addEventListener('keydown', this._onEscKeyDown);
    }

    hiddenEditor() {
        replaceComponent(this._taskComponent, this._taskEditorComponent);

        document.removeEventListener('keydown', this._onEscKeyDown);
    }

    setDefaultView() {
        this.hiddenEditor();
    }
}

export {
    TaskController,
}