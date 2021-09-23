import { SiteMenu } from './components/site-menu';
import { Board } from './components/board';

import { TasksModel } from './model/tasks';

import { BoardController } from './controller/board';
import { FilterController } from './controller/filter';

import { generateTasks } from './mock/task';

import { renderComponent } from './utils';

const TASK_COUNT = 8;

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

renderComponent(siteHeaderElement, new SiteMenu());

const tasksModel = new TasksModel();
tasksModel.tasks = generateTasks(TASK_COUNT);

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new Board();
const boardController = new BoardController(boardComponent, tasksModel);
renderComponent(siteMainElement, boardComponent);
boardController.render();

