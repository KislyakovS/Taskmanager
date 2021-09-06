import { POSITION_INSERT } from './const';

const render = (container, template, place = POSITION_INSERT.BEFOREEND) => {
    container.insertAdjacentHTML(place, template);
}

const renderElement = (container, element, place = POSITION_INSERT.BEFOREEND) => {
    container.insertAdjacentElement(place, element);
}

const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;

    return element;
}

const replace = (parent, newElement, oldElement) => {
    parent.replaceChild(newElement, oldElement);
}

export {
    render,
    replace,
    renderElement,
    createElement
}