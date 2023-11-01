import fileMood from "./ProfileMoodboard.css"
import { navigate } from "../../store/actions";
import { appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navegation";

export enum AttributesMoodboard {
    "favimg" = "favimg",

  }
  
  class MoodBoardProfil extends HTMLElement {
  
    favimg?: string;
  
  
    static get observedAttributes() {
      const attributes: Record<AttributesMoodboard, null> = {
        favimg: null,
       
  
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
  
        const moodboard = this.ownerDocument.createElement("p");
        moodboard.innerHTML = `MOODBOARD`;
        this.shadowRoot.appendChild(moodboard)
  
        container.appendChild(moodboard)
        
        const favoriteimage = this.ownerDocument.createElement("img");
        favoriteimage.setAttribute( "src", `${this.favimg}`)
        this.shadowRoot.appendChild( favoriteimage)
        container.appendChild( favoriteimage)
      
      
        
      }
    }}
  
  customElements.define("artist-moodboard", MoodBoardProfil );
  export default MoodBoardProfil ;