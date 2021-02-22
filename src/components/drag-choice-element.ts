import { LitElement, html, customElement, property, CSSResultArray } from 'lit-element';

import styles from './drag-choice-element.scss';

@customElement('drag-choice-element')
export class DragChoiceElement extends LitElement {
    static get styles(): CSSResultArray {
        return [styles];
    }

    @property({ type: String, reflect: true, attribute: 'data-selected'})
    selected = "false";

    
    connectedCallback() {
        super.connectedCallback();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log('value of', this.id, 'changed to', newVal);
        super.attributeChangedCallback(name, oldVal, newVal);
      }

    render() {
        return html`<div class="drag-drop">
            <slot></slot>
            ${this.selected}
        </div>
    `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'drag-choice-element': DragChoiceElement;
    }
}