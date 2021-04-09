class Component extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render(template) {
        const HTMLNode = template 
            .content
            .cloneNode(true);

        this.shadowRoot
            .appendChild(HTMLNode);
    }
}

export default Component;
