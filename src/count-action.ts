
import { LitElement, html, customElement, property } from 'lit-element';


@customElement('count-action')
export class CountAction extends LitElement {

    @property({ type: Number })
    count = 0;

    render() {
        return html`
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
    `;
    }

    private _onClick() {
        this.count++;
        this.dispatchEvent(new CustomEvent('count-inc', {
            detail: {
                count: this.count,
                
            }
        }))

    }

}

declare global {
    interface HTMLElementTagNameMap {
        'count-action': CountAction;
    }
}
