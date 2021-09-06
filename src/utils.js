import { POSITION_INSERT } from './const';

const render = (container, template, place = POSITION_INSERT.BEFOREEND) => {
    container.insertAdjacentHTML(place, template);
}

const renderComponent = (container, component, place = POSITION_INSERT.BEFOREEND) => {
    container.insertAdjacentElement(place, component.element);
}

const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;

    return element;
}

const replace = (parent, newElement, oldElement) => {
    parent.replaceChild(newElement, oldElement);
}

const removeComponent = (component) => {
    component.element.remove();
    component.removeElement();
}

export {
    render,
    replace,
    removeComponent,
    renderComponent,
    createElement
}