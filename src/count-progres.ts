
import { LitElement, html, customElement, property } from 'lit-element';


@customElement('count-progres')
export class CountProgres extends LitElement {

    constructor() {
        super();
        window.addEventListener('count-inc', this.countIncremented.bind(this))
    }

    @property({ type: Number })
    count = 0;

    private countIncremented(e: any) {
        this.count = e.detail.count;
    }

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
