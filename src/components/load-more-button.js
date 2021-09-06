import { Component } from './component';

const createLoadMoreButtonTemplate = () => (
    `<button class="load-more" type="button">load more</button>`
);

class LoadMoreButton extends Component {
    get _template() {
        return createLoadMoreButtonTemplate();
    }
}

export {
    LoadMoreButton
}