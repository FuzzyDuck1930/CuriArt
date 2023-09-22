import styleNav from "./Navbar.css"

export enum AttributesNav {
  "text"="text",
  "icon"="icon"
  }

  class Navegation extends HTMLElement {

    icon? : string;
    text? : string;

    static get observedAttributes() {
      const attributes: Record<AttributesNav , null> = {
        text: null,
        icon: null,

      };
      return Object.keys(attributes);
    }

    attributeChangedCallback(
      propName: AttributesNav ,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      this[propName] = newValue;
      this.render();
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });


      this.render();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ` <style>${styleNav}</style>`
      const container = this.ownerDocument.createElement("nav");
      const minicontains = this.ownerDocument.createElement("li");
      const text = this.ownerDocument.createElement("p");
      const icon = this.ownerDocument.createElement("img");
      text.classList.add("text")
      minicontains.classList.add("mini-insta");
      container.classList.add("instagram-nav");
      icon.classList.add("iconos-nav");

      text.innerHTML = `${this.text}`;
      icon.setAttribute ("src",`${this.icon}` ) ;


      minicontains.appendChild(icon)
      minicontains.appendChild(text)
      container.appendChild(minicontains)

      this.shadowRoot.appendChild(container)
        ;

      }
    }
}

  customElements.define("my-navegation", Navegation);
  export default Navegation;
