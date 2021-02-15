
import { LitElement, html, customElement, property } from 'lit-element';


@customElement('count-progres')
export class CountProgres extends LitElement {

    constructor() {
        super();
        window.addEventListener('count-inc', this.countIncremented)
    }

    @property({ type: Number })
    count = 0;

    private countIncremented = (e: any) => {
        this.count = e.detail.count;
    }

    disconnectedCallback() {
        window.removeEventListener('count-inc', this.countIncremented)
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

// interface Event {
//     detail: {
//         count: number
//     }
// }
