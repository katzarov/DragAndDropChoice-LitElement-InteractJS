
import { LitElement, html, customElement, property } from 'lit-element';


@customElement('count-progres')
export class CountProgres extends LitElement {

    @property({ type: Number })
    count = 10;

    render() {
        return html`You have clicked ${this.count} times
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'count-progres': CountProgres;
    }
}
