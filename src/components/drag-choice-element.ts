
import { LitElement, html, customElement, property, CSSResultArray } from 'lit-element';
import styles from './drag-choice-element.scss';


@customElement('drag-choice-element')
export class DragChoiceElement extends LitElement {

    static get styles(): CSSResultArray {
        return [styles];
    }
  
    @property({ type: Boolean, reflect: true })
    selected = false;

    @property({ type: Boolean, reflect: true })
    canBeAdded = false;

    connectedCallback() {
        super.connectedCallback();

    }

    render() {
        return html`<div class="draggable drag-drop">
          
                <slot></slot>
    
        </div>
    `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'drag-choice-element': DragChoiceElement;
    }
}