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
            <button class="bg-gray-900 rounded-md text-white"> ${this.button} </button>
            <h2 class="text-xl"> ${this.title} </h2>
        `;

        return template;
    }

    connectedCallback() {
        this.render(this.getTemplate());
    }
}

customElements.define('my-element', myElement);
