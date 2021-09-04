const render = (container, template, place = 'beforeEnd') => {
    container.insertAdjacentHTML(place, template);
}

const renderElement = (container, element, place = 'beforeEnd') => {
    container.insertAdjacentElement(place, element);
}

const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;

    return element;
}

export {
    render,
    renderElement,
    createElement
}