const template = document.createElement('div');
template.innerHTML = `
    <style>
        button {
            background: #1f1f1f;
            font-size: 1rem;
            color: white;
            border-radius: 10px;
            padding: 10px;
        }
    </style>

    <button>
        Hola Mundo de WebComponents
    </button>
`

class myElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(template);
    }
}

customElements.define('my-element', myElement);
