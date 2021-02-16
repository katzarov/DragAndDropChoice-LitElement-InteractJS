
import { LitElement, html, customElement, property } from 'lit-element';


@customElement('count-action')
export class CountAction extends LitElement {

    @property({ type: Number })
    count = 0;

    render() {
        return html`
      <button @click=${this._incCounter} part="button">
        Increase Count
      </button>
    `;
    }

    private _incCounter() {
        this.count++;
        this.dispatchEvent(new CustomEvent('count-inc', {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: {
                count: this.count,
            }
        }));
    };

}

declare global {
    interface HTMLElementTagNameMap {
        'count-action': CountAction;
    }
}
