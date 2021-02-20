
import { LitElement, html, customElement, css } from 'lit-element';
import interact from 'interactjs'


@customElement('drag-choice-wrapper')
export class DragChoiceWrapper extends LitElement {
    static get styles() {
        return css`
          
        `;
    }


    connectedCallback() {
        super.connectedCallback()
        interact('.draggable')
            .draggable({
                inertia: true,
                autoScroll: true,
                listeners: {
                    move: this.dragMoveListener,
                }
            })

            function generateChild() {
                const newItem = document.createElement('drag-choice-element');
                const id = Math.random();
                newItem.id = id.toString();
                newItem.textContent = id.toString();
                return newItem;
            }

            const parent = document.getElementById("parent");
            document.getElementById("add-item").onclick = function () {
                parent.appendChild(generateChild());
            };
    }

    dragMoveListener(event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }

    firstUpdated(): void {

        interact('.dropzone', { context: this.shadowRoot }).dropzone({
            overlap: 0.75,

            ondragenter: function (event) {
                const draggableElement = event.relatedTarget
                const dropzoneElement = event.target

                // feedback the possibility of a drop
                dropzoneElement.classList.add('drop-target')
                draggableElement.classList.add('can-drop')
                draggableElement.textContent = 'Dragged in'
                console.log('Dragged In !!')

            },
            ondragleave: function (event) {
                // remove the drop feedback style
                event.target.classList.remove('drop-target')
                event.relatedTarget.classList.remove('can-drop')
                event.relatedTarget.textContent = 'Dragged out'
            },
            ondrop: function (event) {
                event.relatedTarget.textContent = 'Dropped'
            },
        })

    }

    readEvent = (e: CustomEvent) => {
        console.log(e);
    }

    render() {

        return html`<div class="wrapper">
            <slot></slot> 
            <div class="dropzone" style="width: 600px; height: 200px; border: 1px solid black">shadow dropzone</div>
        </div>
    `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'drag-choice-wrapper': DragChoiceWrapper;
    }
}