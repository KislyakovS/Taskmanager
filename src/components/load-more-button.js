import { Component } from './component';

const createLoadMoreButtonTemplate = () => (
    `<button class="load-more" type="button">load more</button>`
);

class LoadMoreButton extends Component {
    get _template() {
        return createLoadMoreButtonTemplate();
    }

    setClickHandler(handler) {
        this.element.addEventListener('click', handler);
    }
}

export {
    LoadMoreButton
}