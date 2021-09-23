import { SiteMenu } from './components/site-menu';
import { Board } from './components/board';

import { TasksModel } from './model/tasks';

import { BoardController } from './controller/board';
import { FilterController } from './controller/filter';

import { renderComponent } from './utils';

import { API } from './api';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

renderComponent(siteHeaderElement, new SiteMenu());

const STRING_AUTH = 'Basic eo0w590ik29889a';
const api = new API(STRING_AUTH);

api.getTasks()
    .then((tasks) => {
        const tasksModel = new TasksModel();
        tasksModel.tasks = tasks;

        const filterController = new FilterController(siteMainElement, tasksModel);
        filterController.render();

        const boardComponent = new Board();
        const boardController = new BoardController(boardComponent, tasksModel);
        renderComponent(siteMainElement, boardComponent);
        boardController.render();
    })
    .catch((error) => {
        console.error(error);
        document.body.innerHTML = 'Ошибка при загрузке данных';
    });