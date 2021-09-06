import { SiteMenu } from './components/site-menu';
import { Filter } from './components/filter';
import { Board } from './components/board';

import { BoardController } from './controller/board';

import { generateTasks } from './mock/task';
import { filterMock } from './mock/filter';

import { renderComponent } from './utils';

const TASK_COUNT = 8;

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

renderComponent(siteHeaderElement, new SiteMenu());
renderComponent(siteMainElement, new Filter(filterMock));

const boardComponent = new Board();
const boardController = new BoardController(boardComponent);

renderComponent(siteMainElement, boardComponent);
boardController.render(generateTasks(TASK_COUNT));