export enum AttributesProfile {
    "profileimg" = "profileimg",
    "username" = "username",
    "email" = "email",
    "description" = "description",
    "follow"= "follow"
  
  }
  
  class Profile extends HTMLElement {
  
    followButton?: HTMLButtonElement;
    profileimg?: string;
    username?: string;
    email?: string;
    description?: string;
    follow?:string;
  
  
    static get observedAttributes() {
      const attributes: Record<AttributesProfile, null> = {
        username: null,
        email: null,
        profileimg: null,
        description: null,
        follow:null,
  
      };
      return Object.keys(attributes);
    }
  
    attributeChangedCallback(
      propName: AttributesProfile,
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
      this.followButton.classList.add("button-follow");
  
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
          this.followButton.textContent = "Following";
        } else {
          this.followButton.textContent = "Follow";
         
        }
      }
    }
  
  
  
    
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <style>
     
        </style>
         
        `
        const container = document.createElement("div")
        this.shadowRoot.appendChild(container)
  
        const profileimage = this.ownerDocument.createElement("img");
        profileimage.setAttribute( "src", `${this.profileimg}`)
        this.shadowRoot.appendChild(profileimage)
  
        const profilename = this.ownerDocument.createElement("p");
        profilename.innerHTML = `${this.username}`;
        this.shadowRoot.appendChild(profilename)
  
        const profilemail = this.ownerDocument.createElement("p");
        profilemail.innerHTML = `${this.email}`;
        this.shadowRoot.appendChild(profilemail)
  
  
        const profiledesc = this.ownerDocument.createElement("p");
        profiledesc.innerHTML = `${this.description}`;
        this.shadowRoot.appendChild(profiledesc)
  
        const profilebutton = this.ownerDocument.createElement("button");
        profilebutton .innerHTML = `${this.follow}`;
        this.shadowRoot.appendChild(profilebutton )
  
        container.appendChild(profilebutton)
        container.appendChild(profileimage)
        container.appendChild(profiledesc)
        container.appendChild(profilebutton)
  
        
      }
    }}
  
  customElements.define("artist-profile", Profile);
  export default Profile;