import filePro from "./Profile.css"
import { navigate } from "../../store/actions";
import { appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navegation";

export enum AttributesProfile {
    "profileimg" = "profileimg",
    "username" = "username",
    "occupation" = "occupation",
    "follow"= "follow"
  
  }
  
  class Profile extends HTMLElement {
  
    followButton?: HTMLButtonElement;
    profileimg?: string;
    username?: string;
    occupation?: string;
    follow?:string;
  
  
    static get observedAttributes() {
      const attributes: Record<AttributesProfile, null> = {
        username: null,
        profileimg: null,
        occupation: null,
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
    }
  
  
    connectedCallback() {
      this.render();
    }
  

    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <style>
        ${filePro}
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
  
        const profileocup = this.ownerDocument.createElement("p");
        profileocup.innerHTML = `${this.occupation}`;
        this.shadowRoot.appendChild(profileocup)
  
        const profilebutton = this.ownerDocument.createElement("button");
        profilebutton .innerHTML = `EDIT PROFILE`;
        profilebutton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.EDIT)) })
        this.shadowRoot.appendChild(profilebutton )
  
        
        container.appendChild(profileimage)
        container.appendChild(profilename)
        container.appendChild(profileocup)
        container.appendChild(profilebutton)
  
        
      }
    }}
  
  customElements.define("artist-profile", Profile);
  export default Profile;