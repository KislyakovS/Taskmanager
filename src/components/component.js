class Component {
    constructor() {
        if (this.target === Component) {
            throw new Error('Can\'t instantiate abstract class.')
        }

        this._element = null;
    }

    get _template() {
        throw new Error('We need to implement the _template property.');
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
    Component
}