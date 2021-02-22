import { LitElement, html, customElement, CSSResultArray } from 'lit-element';
import { registerDragDrop, registerDropzone } from './interactjs';

import styles from './drag-choice-wrapper.scss';

@customElement('drag-choice-wrapper')
export class DragChoiceWrapper extends LitElement {
    static get styles(): CSSResultArray {
        return [styles];
    }


    connectedCallback() {
        super.connectedCallback()

        registerDragDrop()

        function generateChild() {
            const newItem = document.createElement('drag-choice-element');
            const id = Math.random();
            newItem.id = id.toString();
            newItem.textContent = id.toString();
            return newItem;
        }

        const parent = document.getElementById("parent");
        document.getElementById("add-item").onclick = function () {
            parent.appendChild(generateChild());
        };
    }

    firstUpdated(): void {
        // const self = this;
        // registerDropzone(self);
        registerDropzone.call(this);
    }

    render() {

        return html`<div class="wrapper">
            <slot></slot> 
            <div class="dropzone"></div>
        </div>
    `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'drag-choice-wrapper': DragChoiceWrapper;
    }
}