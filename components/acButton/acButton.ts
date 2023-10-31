enum acButtonElement{
    "leAccess" = "leAccess",
}

class acButton extends HTMLElement {
    leAccess?: string;

    static get observedAttributes(){
        const attrs: Record<acButtonElement,null> = {
            leAccess: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:acButtonElement, oldValue: string | undefined, newValue: string | undefined ){
        switch(propName){
            default:
            this[propName] = newValue;
            break;
        }


    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `<style></style>

            <button>${this.leAccess}</button>
            `
        }
    }
}

customElements.define("my-newtton", acButton);
export default acButton;