import { Component } from './component';

const createBoardTemplate = () => (
    ` <section class="board container">
        <div class="board__sort-list">
          <a href="#" class="board__sort-item">SORT BY DEFAULT</a>
          <a href="#" class="board__sort-item">SORT BY DATE up</a>
          <a href="#" class="board__sort-item">SORT BY DATE down</a>
        </div>

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