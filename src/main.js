import { createSiteMenuTemplate } from './components/site-menu';
import { createFilterTemplate } from './components/filter';
import { createBoardTemplate } from './components/board';
import { createTaskEditTemplate } from './components/task-editor';
import { createTaskTemplate } from './components/task';
import { createLoadMoreButtonTemplate } from './components/load-mode-button';

import { generateTask, generateTasks } from './mock/task';

import { render } from './utils';

const TASK_COUNT = 5;

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector('.board');
const taskListElement = boardElement.querySelector('.board__tasks');

render(taskListElement, createTaskEditTemplate(generateTask()));

generateTasks(TASK_COUNT).forEach(task => render(taskListElement, createTaskTemplate(task)))

render(boardElement, createLoadMoreButtonTemplate());