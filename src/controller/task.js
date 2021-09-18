import { Task } from '../components/task';
import { TaskEditor } from '../components/task-editor';

import { renderComponent, replaceComponent, removeComponent } from '../utils';

const Mode = {
    DEFAULT: 'DEFAULT',
    EDITOR: 'EDITOR',
}

const EmptyTask = {}

class TaskController {
    constructor(container, onDataChange, onViewChange) {
        this._container = container;
        this._onDataChange = onDataChange;
        this._onViewChange = onViewChange;

        this._task = null;
        this._taskComponent = null;
        this._taskEditorComponent = null;

        this._mode = Mode.DEFAULT;

        this._onArchiveButtonClick = this._onArchiveButtonClick.bind(this);
        this._onEditButtonClick = this._onEditButtonClick.bind(this);
        this._onFavoritesButtonClick = this._onFavoritesButtonClick.bind(this);

        this._onToggleDateClick = this._onToggleDateClick.bind(this);
        this._onToggleReplaceClick = this._onToggleReplaceClick.bind(this);
        this._onEditorFormSubmit = this._onEditorFormSubmit.bind(this);
        this._onEscKeyDown = this._onEscKeyDown.bind(this);
    }

    render(task) {
        this._task = task;

        this._taskComponent = new Task(task);
        this._taskEditorComponent = new TaskEditor(task);

        renderComponent(this._container, this._taskComponent);

        this._setEvents();
    }

    rerender() {
        this._taskEditorComponent.rerender();
    }

    destroy() {
        removeComponent(this._taskComponent);
        removeComponent(this._taskEditorComponent);

        document.removeEventListener('keydown', this._onEscKeyDown);
    }

    _setEvents() {
        this._taskComponent.setArchiveButtonClickHandler(this._onArchiveButtonClick);
        this._taskComponent.setEditButtonClickHandler(this._onEditButtonClick);
        this._taskComponent.setFavoritesButtonClickHandler(this._onFavoritesButtonClick);

        this._taskEditorComponent.setSubmitFormHandler(this._onEditorFormSubmit);
        this._taskEditorComponent.setClickToggleDateHandler(this._onToggleDateClick);
        this._taskEditorComponent.setClickToggleRepeatHandler(this._onToggleReplaceClick);
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

    _onToggleDateClick() {
        this._onDataChange(this,
            Object.assign(this._task, {
                isDate: !this._task.isDate
            }),
            this._task
        );
    }

    _onToggleReplaceClick() {
        this._onDataChange(this,
            Object.assign(this._task, {
                isRepeat: !this._task.isRepeat
            }),
            this._task
        );
    }

    _onEscKeyDown(event) {
        if (event.key === 'Escape') {
            this.hiddenEditor();
        }
    }

    showEditor() {
        this._mode = Mode.EDITOR;

        replaceComponent(this._taskEditorComponent, this._taskComponent);

        document.addEventListener('keydown', this._onEscKeyDown);
    }

    hiddenEditor() {
        this._mode = Mode.DEFAULT;

        replaceComponent(this._taskComponent, this._taskEditorComponent);

        document.removeEventListener('keydown', this._onEscKeyDown);
    }

    setDefaultView() {
        this.hiddenEditor();
    }
}

export {
    TaskController,
    Mode,
    EmptyTask
}