import fileMood from "./ProfileMoodboard.css"
import { navigate } from "../../store/actions";
import { appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navegation";

export enum AttributesMoodboard {
    "profileimg" = "profileimg",
    // "inspiration" = "inspiration",
    // "moodboard" = "moodboard",

  }
  
  class MoodBoardProfil extends HTMLElement {
  

    profileimg?: string;
    // inspiration?: string;
    // moodboard?: string;
  
  
    static get observedAttributes() {
      const attributes: Record<AttributesMoodboard, null> = {
        // moodboard: null,
        // inspiration: null,
        profileimg: null,
       
  
      };
      return Object.keys(attributes);
    }
  
    attributeChangedCallback(
      propName: AttributesMoodboard,
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
        ${fileMood}
        </style>
         
        `
        const container = document.createElement("div")
        this.shadowRoot.appendChild(container)
  
        const profileimage = this.ownerDocument.createElement("img");
        profileimage.setAttribute( "src", `${this.profileimg}`)
        this.shadowRoot.appendChild(profileimage)
  
        const inspiration = this.ownerDocument.createElement("p");
        inspiration.innerHTML = `INSPIRATION`;
        this.shadowRoot.appendChild(inspiration)

        const moodboard = this.ownerDocument.createElement("p");
        moodboard.innerHTML = `MOODBOARD`;
        this.shadowRoot.appendChild(moodboard)
  
       
  
        
        container.appendChild(profileimage)
        container.appendChild(inspiration)
        container.appendChild(moodboard)
      
        
      }
    }}
  
  customElements.define("artist-moodboard", MoodBoardProfil );
  export default MoodBoardProfil ;