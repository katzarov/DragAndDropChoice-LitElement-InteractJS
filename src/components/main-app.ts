
import "./draggable-item";
import { LitElement, html, customElement } from 'lit-element';

import * as interact from 'interactjs'
// import {interactjs} from '../node_modules/interactjs/index'

// import * as interact from 'interactjs/dist/interact.js';



import { data } from '../data';

@customElement('main-app')
export class MainApp extends LitElement {


    connectedCallback() {
        super.connectedCallback()
        
        console.log(interact)
        
    }


    render() {
        return html`
        ${data.map(choice => html`
            <draggable-item>
                ${choice.value}
            </draggable-item>
        `)}
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'main-app': MainApp;
    }
}