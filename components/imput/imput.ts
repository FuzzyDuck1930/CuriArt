enum imputElement{
    "lePlace" = "lePlace",
}

class imput extends HTMLElement {
    lePlace?: string;

    static get observedAttributes(){
        const attrs: Record<imputElement,null> = {
            lePlace: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:imputElement, oldValue: string | undefined, newValue: string | undefined ){
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

            <input type="text" placeholder="${this.lePlace}">
            `
        }
    }
}

customElements.define("my-input", imput);
export default imput;