import { createElement } from '../utils';

const createLoadMoreButtonTemplate = () => (
    `<button class="load-more" type="button">load more</button>`
);

class LoadMoreButton {
    constructor() {
        this._element = null;
    }

    get _template() {
        return createLoadMoreButtonTemplate();
    }

    get element() {
        if (!this._element) {
            this._element = createElement(this._template);
        }

        return this._element;
    }

    removeElement() {
        this._element = null;
    }
}

export {
    LoadMoreButton
}