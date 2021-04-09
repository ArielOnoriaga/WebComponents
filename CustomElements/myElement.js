import Component from "./Component.js";

class myElement extends Component {
    static get observedAttributes() {
        return ['button', 'title'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
       if(oldValue !== newValue)
            this[attr] = newValue;
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <button> ${this.button} </button>
            <h2> ${this.title} </h2>
            ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        return `
            <style>
                button {
                    padding: 10px;
                    background: black;
                    color: white;
                    border-radius: 10px;
                }
            </style>
        `
    }

    connectedCallback() {
        this.render(this.getTemplate());
    }
}

customElements.define('my-element', myElement);
