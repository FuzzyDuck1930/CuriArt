class Login extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;

            const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot?.appendChild(myNav);
        }
    }
}