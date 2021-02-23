import {LitElement, html, customElement, CSSResultArray} from 'lit-element';

import styles from './drag-choice-element.scss';

@customElement('drag-choice-element')
export class DragChoiceElement extends LitElement {
  static get styles(): CSSResultArray {
    return [styles];
  }

  render() {
    return html`<div class="drag-drop" id=${this.id}>
      <slot></slot>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'drag-choice-element': DragChoiceElement;
  }
}
