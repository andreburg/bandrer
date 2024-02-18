import {Components} from "./Components.js";

export class Component {
    #RENDER;

    constructor(params) {
        this.comps = new Components();
        this.#RENDER = new Event("Render");
    }

    sideEffects() {
        this.comps.loadComponents();
    }

    RENDER() {
        dispatchEvent(this.#RENDER);
    }

    getHtml() {
        return "";
    }
}

export const buildComponent = (componentType, attributes, components, innerText) => {
    let htmlComponent = document.createElement(componentType);

    for (const attributeKey in attributes) {
        if (attributes.hasOwnProperty(attributeKey)) {
            const attributeValue = attributes[attributeKey];
            htmlComponent.setAttribute(attributeKey, attributeValue);
        }
    }
    for (let i = 0; i < components.length; i++) {
        htmlComponent.appendChild(components[i]);
    }

    if (innerText) {
        htmlComponent.innerText = innerText;
    }

    return htmlComponent;
}