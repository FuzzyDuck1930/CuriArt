export enum Attributes {
    "profileimg" = "profileimg",
    "username" = "username",
    "occupation" = "occupation",
    "description" = "description",
    "image" = "image",
   
  }
  
  class ArtistCard extends HTMLElement {
 
  
    followButton?: HTMLButtonElement;
    profileimg?: string;
    username?: string;
    occupation?: string;
    description?: string;
    image?: string;
   
  
    static get observedAttributes() {
      const attributes: Record<Attributes, null> = {
        username: null,
        occupation: null,
        description: null,
        image: null,
        profileimg: null,
        
      };
      return Object.keys(attributes);
    }
  
    attributeChangedCallback(
      propName: Attributes,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      this[propName] = newValue;
      this.render();
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.followButton = document.createElement("button");
      this.followButton.textContent = "Follow";
    
    
      this.followButton.addEventListener("click", () => {
        this.toggleFollow();
      });
    
      this.render();
    }
  
    connectedCallback() {
      this.render();
    }
  
   
    toggleFollow() {
      if (this.followButton) {
        if (this.followButton.textContent === "Follow") {
          this.followButton.textContent = "Unfollow";
        } else {
          this.followButton.textContent = "Follow";
        }
      }
    }
    
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="index.css">
          <section>
            <img src="${this.profileimg}" alt="artimage">
            <h1>${this.username}</h1>
            <p>${this.occupation}</p>
            <p>${this.description}</p>
            <img src="${this.image}" alt="art">
           
            
       
          </section>
        `;
        if (this.followButton) {
          this.shadowRoot.appendChild(this.followButton);
       
        }
       
    
  }}}
  
  customElements.define("artist-card", ArtistCard);
  export default ArtistCard;
  