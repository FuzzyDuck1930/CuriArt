export enum AttributesNav {
    "logo" = "logo",
    "settings" = "settings",
    "search" = "search",
    "friends" = "friends",
    "profile"= "profile",
    "create"= "create",
    "moodboard"= "moodboard",
    "settingsIcon" = "settingsIcon",
    "searchIcon" = "searchIcon",
    "friendsIcon" = "friendsIcon",
    "profileIcon"= "profileIcon",
    "createIcon"= "createIcon",
    "moodboardIcon"= "moodboardIcon"

  }
  
  class Navegation extends HTMLElement {

    logo? : string;
    search? : string;
    settings? :string;
    friends? :string;
    profile? :string;
    create? :string;
    moodboard? :string;
    settingsIcon? :string;
    searchIcon? :string;
    friendsIcon? :string;
    profileIcon? :string;
    createIcon? :string;
    moodboardIcon? :string;
   
  
    static get observedAttributes() {
      const attributes: Record<AttributesNav , null> = {
        logo: null,
        settings: null,
        search: null,
        friends: null,
        profile: null,
        create: null,
        moodboard: null,
        settingsIcon: null,
        searchIcon: null,
        friendsIcon: null,
        profileIcon: null,
        createIcon: null,
        moodboardIcon: null,
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
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="index.css">
          <nav>
          <img src="${this.logo}" alt="Logo"> 
          <ul>
            <li><img src="${this.settingsIcon}" alt="Settings"> ${this.settings }</li>
            <li><img src="${this.searchIcon}" alt="Search"> ${this.search}</li>
            <li><img src="${this.friendsIcon}" alt="Friends"> ${this.friends}</li>
            <li><img src="${this.profileIcon}" alt="Profile"> ${this.profile}</li>
            <li><img src="${this.createIcon}" alt="Create"> ${this.create}</li>
            <li><img src="${this.moodboardIcon}" alt="Moodboard"> ${this.moodboard}</li>
          </ul>
          </nav>
        `;
    
      }
    }
}
  
  customElements.define("my-navegation", Navegation);
  export default Navegation;
  