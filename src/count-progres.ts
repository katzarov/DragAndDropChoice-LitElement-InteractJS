
import { LitElement, html, customElement, property } from 'lit-element';

@customElement('count-progres')
export class CountProgres extends LitElement {

    constructor() {
        super();
        window.addEventListener('count-inc', this.countIncremented as EventListener)
    }

    @property({ type: Number })
    count = 0;

    
    private countIncremented = (e: CustomEvent) => {
        this.count = e.detail.count;
    }

    disconnectedCallback() {
        window.removeEventListener('count-inc', this.countIncremented as EventListener)
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