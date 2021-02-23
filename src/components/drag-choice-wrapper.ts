import {
  LitElement,
  html,
  customElement,
  CSSResultArray,
  property,
} from 'lit-element';
import interact from 'interactjs';

import styles from './drag-choice-wrapper.scss';

@customElement('drag-choice-wrapper')
export class DragChoiceWrapper extends LitElement {
  static get styles(): CSSResultArray {
    return [styles];
  }

  @property({type: Array})
  selectedIds = [];

  private removeId(id) {
    this.selectedIds = this.selectedIds.filter(
      (selectedId) => selectedId !== id
    );
  }

  private addId(id) {
    this.selectedIds = [...this.selectedIds, id];
  }

  connectedCallback() {
    super.connectedCallback();

    interact('.drag-drop').draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'body',
          endOnly: true,
        }),
      ],
      autoScroll: true,
      listeners: {move: this.dragMoveListener},
    });

    function generateDragChoiceElement() {
      const newItem = document.createElement('drag-choice-element');
      const id = Math.random();
      newItem.id = id.toString();
      newItem.textContent = id.toString();
      return newItem;
    }

    document.getElementById('add-item').onclick = () => {
      this.appendChild(generateDragChoiceElement());
    };
  }

  firstUpdated(): void {
    const self = this;
    interact('.dropzone', {context: this.shadowRoot}).dropzone({
      overlap: 0.75,

      // listen for drop related events:
      ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
      },
      ondragenter: function (event) {
        // feedback the possibility of a drop
        event.target.classList.add('drop-target');
        event.relatedTarget.classList.add('can-drop');
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
        self.removeId(event.relatedTarget.getAttribute('id'));
      },
      ondrop: function (event) {
        self.addId(event.relatedTarget.getAttribute('id'));
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
      },
    });
  }

  dragMoveListener(event) {
    const target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  updated() {
    console.log(this.selectedIds);
  }

  render() {
    return html`<div class="wrapper">
      <slot></slot>
      <div class="dropzone"></div>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'drag-choice-wrapper': DragChoiceWrapper;
  }
}
