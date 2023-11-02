
import { addObserver, appState, dispatch  } from "../store/index";
import { navigate } from "../store/actions";
import { Screens } from "../types/navegation";
import "../components/export";
import styleMoodboard from "./moodboard.css"
import { AttributesMoodBoard } from "../components/Profilemood/Profilemood";
import { getUserData, getPostData,getPostsByArtistId } from "../utils/firebase";


class MoodBoard extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }
  connectedCallback() {
    this.render();
  }
  

  async render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>${styleMoodboard}</style>`;

      const myNav = this.ownerDocument.createElement("my-nav");
      this.shadowRoot?.appendChild(myNav);


      const Profilecont = this.ownerDocument.createElement("div");
      Profilecont.classList.add("Profilecontainer");
      this.shadowRoot?.appendChild(Profilecont);

      const artistId = "Vzr3itFP1wwRWe24NSgK"; // El ID del artista deseado
      const userData = await getUserData();
      const user = userData.find((user) => user.id === artistId);

      if (user) {
        const myProfile = this.ownerDocument.createElement("artist-mood");
        myProfile.setAttribute(AttributesMoodBoard.profileimg, user.profileimg);
        myProfile.setAttribute(AttributesMoodBoard.username, user.username);
       
        Profilecont.appendChild(myProfile);
        console.log(Profilecont);
    }
  }
}
}
customElements.define("app-favorites", MoodBoard);
export default MoodBoard;
