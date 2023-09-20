export enum AttributesComments {
    "profileimg" = "profileimg",
    "username" = "username",
    "textcomment" = "textcomment",
  }
  
  class Comments extends HTMLElement {
 
    
    profileimg?: string;
    username?: string;
    textcomment?: string;
   
  
    static get observedAttributes() {
      const attributes: Record<AttributesComments , null> = {
        username: null,
        textcomment: null,
        profileimg: null,
      };
      return Object.keys(attributes);
    }
  
    attributeChangedCallback(
      propName: AttributesComments ,
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
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="index.css">
          <section>
            <img src="${this.profileimg}" alt="artimage">
            <h1>${this.username}</h1>
            <p>${this.textcomment}</p>
        
          </section>
        `;
    
      }
    }
}
  
  customElements.define("my-comments", Comments);
  export default Comments;
  