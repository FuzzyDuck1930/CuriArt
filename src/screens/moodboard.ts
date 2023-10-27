
import { addObserver, appState, dispatch  } from "../store/index";
import { navigate } from "../store/actions";
import { Screens } from "../types/navegation";
import "../components/export";
import styleMoodboard from "./moodboard.css"


class MoodBoard extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
    }
  

  connectedCallback() {
    this.render();

    
  }


  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>${styleMoodboard }</style>`;

        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot?.appendChild(myNav);

        const container = document.createElement("div");
        container.classList.add("artist-card-moodboard");

        const myMoodboard = this.ownerDocument.createElement("artist-moodboard")
        this.shadowRoot?.appendChild(myMoodboard);
        container.appendChild(myMoodboard)
        this.shadowRoot?.appendChild(container);

    }}
  }

customElements.define("app-favorites", MoodBoard);
export default MoodBoard;
