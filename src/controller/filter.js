import { Filter } from '../components/filter';

import { FILTER_TYPE } from '../const';

import { getTasksByFilter } from '../utils/filter';
import { renderComponent, replaceComponent } from '../utils';

class FilterController {
    constructor(container, tasksModel) {
        this._container = container;
        this._tasksModel = tasksModel;

        this._activeFilterType = FILTER_TYPE.ALL;

        this._filterComponent = null;

        this._onFilterChanged = this._onFilterChanged.bind(this);

        this._tasksModel.dataChangeHandler = this._onDataChage.bind(this);
    }

    render() {
        const filters = Object.values(FILTER_TYPE).map(type => ({
            name: type,
            count: getTasksByFilter(this._tasksModel.tasksAll, type).length,
            checked: type === this._activeFilterType,
        }));

        const oldFilterComponent = this._filterComponent;

        this._filterComponent = new Filter(filters);
        this._filterComponent.setFilterChangeHandler(this._onFilterChanged);

        if (oldFilterComponent) {
            replaceComponent(this._filterComponent, oldFilterComponent);
        } else {
            renderComponent(this._container, this._filterComponent);
        }
    }

    _onFilterChanged(type) {
        this._activeFilterType = type;
        this._tasksModel.filter = type;
    }

    _onDataChage() {
        this.render();
    }
}

export {
    FilterController
}