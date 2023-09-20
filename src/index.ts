import { artistData } from "./Data/data";
import ArtistCard, { Attributes } from "./components/card/card";
import Comments, { AttributesComments } from "./components/comments/comments";
import Navegation, { AttributesNav } from "./components/Navbar/Navbar";

class AppContainer extends HTMLElement {
  card: ArtistCard[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    artistData.forEach((artist) => {
      const cards = this.ownerDocument.createElement("artist-card") as ArtistCard;
      cards.setAttribute(Attributes.profileimg, artist.profileimg);
      cards.setAttribute(Attributes.username, artist.username);
      cards.setAttribute(Attributes.occupation, artist.occupation);
      cards.setAttribute(Attributes.description, artist.artwork.description);
      cards.setAttribute(Attributes.image, artist.artwork.imageUrl);

      this.card.push(cards);
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const nave = this.ownerDocument.createElement("nav");
    const checkpoints = this.ownerDocument.createElement("my-navegation") as Navegation;
    checkpoints.setAttribute(AttributesNav.search, "Search");
    checkpoints.setAttribute(AttributesNav.settings, "Settings");
    checkpoints.setAttribute(AttributesNav.friends, "Friends");
    checkpoints.setAttribute(AttributesNav.profile, "Profile");
    checkpoints.setAttribute(AttributesNav.moodboard, "My Moodboard");
    checkpoints.setAttribute(AttributesNav.create, "Create");
    
    checkpoints.setAttribute(AttributesNav.searchIcon, "./icons/magnifying-glass-solid.png");
    checkpoints.setAttribute(AttributesNav.settingsIcon, "./icons/gear-solid.png");
    checkpoints.setAttribute(AttributesNav.friendsIcon, "./icons/user-group-solid.png");
    checkpoints.setAttribute(AttributesNav.profileIcon, "./icons/user-solid.png");
    checkpoints.setAttribute(AttributesNav.moodboardIcon, "./icons/paintbrush-solid.png");
    checkpoints.setAttribute(AttributesNav.createIcon, "./icons/square-plus-solid.png");
    nave.appendChild(checkpoints);
    this.shadowRoot?.appendChild(nave);
  
    if (this.shadowRoot) {
      const container = this.ownerDocument.createElement("div"); 
      container.classList.add("artist-card-container"); 

      this.card.forEach((artistcard) => {
        const cardContainer = this.ownerDocument.createElement("div");
        cardContainer.classList.add("artist-card-container"); 
        cardContainer.appendChild(artistcard);
  
        const commentsComponent = this.ownerDocument.createElement("my-comments");
        commentsComponent.setAttribute(
          AttributesComments.profileimg, "./Icons and Pimage/250px-Mona_Lisa.jpg");
        commentsComponent.setAttribute(AttributesComments.username, "Nombre_de_usuario");
        commentsComponent.setAttribute(AttributesComments.textcomment, "Este es el texto del comentario");
  
        cardContainer.appendChild(commentsComponent);
        container.appendChild(cardContainer); 
      });
  
      this.shadowRoot?.appendChild(container); 
    }
  }
  
}

customElements.define("app-container", AppContainer);
