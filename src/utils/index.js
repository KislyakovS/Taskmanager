import { POSITION_INSERT } from '../const';

const renderComponent = (container, component, place = POSITION_INSERT.BEFOREEND) => {
    container.insertAdjacentElement(place, component.element);
}

const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;

    return element;
}

const replaceComponent = (newComponent, oldComponent) => {
    const newElement = newComponent.element;
    const oldElement = oldComponent.element;

    const parentElement = oldElement.parentElement;

    if (parentElement && newElement && oldElement) {
        parentElement.replaceChild(newElement, oldElement);
    }
}

const removeComponent = (component) => {
    component.element.remove();
    component.removeElement();
}

export {
    replaceComponent,
    removeComponent,
    renderComponent,
    createElement
}