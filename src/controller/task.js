import { Task } from '../components/task';

import { renderComponent } from '../utils';

class TaskController {
    constructor(container) {
        this._container = container;

        this._taskComponent = null;
    }

    render(task) {
        this._taskComponent = new Task(task);

        renderComponent(this._container, this._taskComponent);
    }
}

export {
    TaskController,
}