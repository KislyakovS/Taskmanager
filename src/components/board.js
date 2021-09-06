import { Component } from './component';

const createBoardTemplate = () => (
    ` <section class="board container">
        <div class="board__tasks"></div>
  </section>`
);

class Board extends Component {
    get _template() {
        return createBoardTemplate();
    }
}

export {
    Board
}