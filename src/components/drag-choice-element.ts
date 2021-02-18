
import { LitElement, html, customElement, property, css } from 'lit-element';


@customElement('drag-choice-element')
export class DragChoiceElement extends LitElement {
    static get styles() {
        return css`
           div { 
                width: 100px;
                min-height: 6.5em;
                margin: 1rem 0 0 1rem;
                background-color: #29e;
                color: white;
                border-radius: 0.75em;
                padding: 4%;
                touch-action: none;
                user-select: none;
                -webkit-transform: translate(0px, 0px);
                transform: translate(0px, 0px);  
                display: inline-block;
           }
        `;
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