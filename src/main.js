import { SiteMenu } from './components/site-menu';
import { Filter } from './components/filter';
import { Board } from './components/board';
import { TaskEditor } from './components/task-editor';
import { Task } from './components/task';
import { LoadMoreButton } from './components/load-more-button';

import { generateTask, generateTasks } from './mock/task';
import { filterMock } from './mock/filter';

import { renderComponent } from './utils';

const TASK_COUNT = 5;


const renderBoard = () => {
    const boardElement = document.querySelector('.board');
    const taskListElement = boardElement.querySelector('.board__tasks');

    const tasks = generateTasks(TASK_COUNT);
    const editTasks = generateTask();

    renderComponent(taskListElement, new TaskEditor(editTasks));
    tasks.forEach(task => renderComponent(taskListElement, new Task(task)));
    renderComponent(boardElement, new LoadMoreButton());
}

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

renderComponent(siteHeaderElement, new SiteMenu());
renderComponent(siteMainElement, new Filter(filterMock));
renderComponent(siteMainElement, new Board());

renderBoard();