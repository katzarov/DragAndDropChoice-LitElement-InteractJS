
import { LitElement, html, customElement, css } from 'lit-element';


@customElement('draggable-item')
export class DraggableItem extends LitElement {
    static get styles() {
        return css`
          div { 
                width: 25%;
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
           }
        `;
    }

    render() {
        return html`<div class="draggable">
            <p>
                <slot></slot>
            </p>
        </div>
    `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'draggable-item': DraggableItem;
    }
}