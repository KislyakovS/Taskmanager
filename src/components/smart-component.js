import { Component } from './component';

class SmartComponent extends Component {
    _removeEvents() {
        throw new Error('We need to implement the _removeEvent get property.');
    }

    _setEvents() {
        throw new Error('We need to implement the _setEvents get property.');
    }

    rerender() {
        this._removeEvents();

        const oldElement = this.element;
        const parentElement = oldElement.parentElement;

        this.removeElement();

        const newElement = this.element;

        parentElement.replaceChild(newElement, oldElement);

        this._setEvents();
    }
}

export {
    SmartComponent
}