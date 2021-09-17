import { getTasksByFilter } from '../utils/filter';
import { FILTER_TYPE } from '../const';

class TasksModel {
    constructor() {
        this._tasks = [];
        this._activeFilterType = FILTER_TYPE.ALL;

        this._dataChangeHandlers = [];
        this._filterChangeHandlers = [];
    }

    get tasks() {
        return getTasksByFilter(this._tasks, this._activeFilterType);
    }

    get tasksAll() {
        return this._tasks;
    }

    set tasks(tasks) {
        this._tasks = [...tasks];
        this._callHandlers(this._dataChangeHandlers);
    }

    set filter(type) {
        this._activeFilterType = type;
        this._callHandlers(this._filterChangeHandlers);
    }

    updateTask(id, newTask) {
        const index = this._tasks.findIndex(it => it.id === id);

        if (index !== -1) {
            return false;
        }

        this._tasks = [].concat(this._tasks.slice(0, index), newTask, this._tasks.slice(index + 1));

        this._callHandlers(this._dataChangeHandlers);

        return true
    }

    set dataChangeHandlers(handler) {
        this._dataChangeHandlers.push(handler);
    }

    set filterChangeHandlers(handler) {
        this._filterChangeHandlers.push(handler);
    }

    _callHandlers(handlers) {
        handlers.forEach(handler => handler());
    }
}

export {
    TasksModel
}