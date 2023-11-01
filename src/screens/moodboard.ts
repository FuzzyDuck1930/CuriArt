
import { addObserver, appState, dispatch  } from "../store/index";
import { navigate } from "../store/actions";
import { Screens } from "../types/navegation";
import "../components/export";
import styleMoodboard from "./moodboard.css"
import MoodBoardProfil, { AttributesMoodboard } from "../components/Profilemood/Profilemood";

class MoodBoard extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>${styleMoodboard}</style>`;

      const myNav = this.ownerDocument.createElement("my-nav");
      this.shadowRoot?.appendChild(myNav);

      const container = document.createElement("div");
      container.classList.add("artist-card-moodboard");


      this.shadowRoot?.appendChild(container);
    }
  }
}

customElements.define("app-favorites", MoodBoard);
export default MoodBoard;
