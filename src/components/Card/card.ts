export enum Attributes {
  "profileimg" = "profileimg",
  "username" = "username",
  "occupation" = "occupation",
  "description" = "description",
  "image" = "image",
  "like"="like",
  "save"="save",
  "follow"= "follow"
 
}

class ArtistCard extends HTMLElement {

  followButton?: HTMLButtonElement;
  profileimg?: string;
  username?: string;
  occupation?: string;
  description?: string;
  image?: string;
  like?: string;
  save?: string;
  follow?:string;
 

  static get observedAttributes() {
    const attributes: Record<Attributes, null> = {
      username: null,
      occupation: null,
      description: null,
      image: null,
      profileimg: null,
      like:null,
      save:null,
      follow:null,
      
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

    this.followButton.textContent = "Following";
  
  
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
      if (this.followButton.textContent === "Following") {
        this.followButton.textContent = "Unfollowing";
      } else {
        this.followButton.textContent = "Following";
        this.followButton.classList.add("button-follow"); 
      }
    }
  }
  
  toggleLike() {
    if (this.like) {
      if (this.like === "../src/components/img/heart-regular.png") {
        this.like = "../src/components/img/heart-solid.png";
      } else {
        this.like = "../src/components/img/heart-regular.png";
      }

      this.render(); 
    }
  }

  toggleSave() {
    if (this.save) {
      if (this.save === "../src/components/img/bookmark-regular.png") {
        this.save = "../src/components/img/bookmark-solid.png";
      } else {
        this.save = "../src/components/img/bookmark-regular.png";
      }
  
      this.render(); 
    }
  }
  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section>
          <img src="${this.profileimg}" alt="artimage">
          <h1>${this.username}</h1>
          <h4>${this.occupation}</h4>
          <p>${this.description}</p>
          <img src="${this.image}" alt="art">
          <button class="like-button"><img class="like-image" src="${this.like}" alt="like"></button>
        <button class="save-button"><img class="save-image" src="${this.save}" alt="save"></button>
     
        </section>
      `
      if (this.followButton) {
        this.shadowRoot.querySelector("section")?.insertBefore(this.followButton, this.shadowRoot.querySelector("p"));
      }
      
      const likeButton = this.shadowRoot.querySelector(".like-button");
      if (likeButton) {
        likeButton.addEventListener("click", () => {
          this.toggleLike();
        });
      }
  
      const saveButton = this.shadowRoot.querySelector(".save-button");
      if (saveButton) {
        saveButton.addEventListener("click", () => {
          this.toggleSave();
        });
      }
     
    }
  }}

customElements.define("artist-card", ArtistCard);
export default ArtistCard;
