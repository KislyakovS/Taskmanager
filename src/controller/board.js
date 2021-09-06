import { Task } from '../components/task';
import { LoadMoreButton } from '../components/load-more-button';

import { renderComponent } from '../utils';

class BoardController {
    constructor(component) {
        this._component = component;
    }

    render(tasks) {
        const container = this._component.element;
        const boardElement = container.querySelector('.board');
        const taskListElement = container.querySelector('.board__tasks');

        tasks.forEach(task => renderComponent(taskListElement, new Task(task)));
        renderComponent(boardElement, new LoadMoreButton());
    }
}

export {
    BoardController
}