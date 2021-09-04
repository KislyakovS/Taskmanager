import { SiteMenu } from './components/site-menu';
import { Filter } from './components/filter';
import { Board } from './components/board';
import { TaskEditor } from './components/task-editor';
import { Task } from './components/task';
import { LoadMoreButton } from './components/load-more-button';

import { generateTask, generateTasks } from './mock/task';
import { filterMock } from './mock/filter';

import { renderElement } from './utils';

const TASK_COUNT = 5;


const renderBoard = () => {
    const boardElement = document.querySelector('.board');
    const taskListElement = boardElement.querySelector('.board__tasks');

    const tasks = generateTasks(TASK_COUNT);
    const editTasks = generateTask();

    renderElement(taskListElement, new TaskEditor(editTasks).element);
    tasks.forEach(task => renderElement(taskListElement, new Task(task).element));
    renderElement(boardElement, new LoadMoreButton().element);
}

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

renderElement(siteHeaderElement, new SiteMenu().element);
renderElement(siteMainElement, new Filter(filterMock).element);
renderElement(siteMainElement, new Board().element);

renderBoard();