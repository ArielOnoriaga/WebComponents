class myElement extends HTMLElement {
    constructor() {
        super();
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    Hola Template Sintax
                </h2>

                <button>
                    Template Button
                </button>
            </section>
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

    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);
