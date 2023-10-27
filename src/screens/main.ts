import {artistData}from "../service/data";
import ArtistCard, { Attributes } from "../components/Card/Card";
import { AttributesComments } from "../components/Comments/Comments";
import { addObserver, appState, dispatch } from "../store/index";
import { navigate } from "../store/actions";
import { Screens } from "../types/navegation";
import "../components/export";
import "../components/nav/nav";
import styleMain from "./main.css"

class Dashboard extends HTMLElement {

  card: ArtistCard[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);

    artistData.forEach((artist) => {
      const cards = this.ownerDocument.createElement("artist-card") as ArtistCard;
      cards.setAttribute(Attributes.profileimg, artist.profileimg);
      cards.setAttribute(Attributes.username, artist.username);
      cards.setAttribute(Attributes.occupation, artist.occupation);
      cards.setAttribute(Attributes.description, artist.artwork.description);
      cards.setAttribute(Attributes.image, artist.artwork.imageUrl);

      cards.setAttribute(Attributes.like, "../../dist/img/Me gusta.png");
      cards.setAttribute(Attributes.save, "../../dist/img/Favoritos.png");

      // cards.addEventListener("likeClick", () => {
      //   this.toggleLike(cards);
      // });
      // cards.addEventListener("saveClick", () => {
      //   this.toggleSave(cards);
      // });


this.card.push(cards);
});
}
  

  connectedCallback() {
    this.render();
  }


  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>${styleMain}</style>`;

        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot.appendChild(myNav);

        if (this.shadowRoot) {
          const container = this.ownerDocument.createElement("div");
          container.classList.add("artist-card-container");
    
          this.card.forEach((artistcard) => {
            const cardContainer = this.ownerDocument.createElement("div");
            cardContainer.classList.add("artist-card");
            cardContainer.appendChild(artistcard);
            const commentsComponent = this.ownerDocument.createElement("my-comments") ;

            commentsComponent.setAttribute(
          AttributesComments.profileimg, "../../dist/img/Usuario.jpg" );
        commentsComponent.setAttribute(AttributesComments.username, "Maria");
        commentsComponent.setAttribute(AttributesComments.textcomment, "Este es el texto del comentario");



        cardContainer.appendChild(commentsComponent);


            container.appendChild(cardContainer);
          });
    
          this.shadowRoot?.appendChild(container);
        
      
        }}}
  }

customElements.define("app-dashboard", Dashboard);
export default Dashboard;