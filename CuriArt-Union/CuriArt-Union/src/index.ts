import { artistData } from "./Data/data";
import ArtistCard, { Attributes } from "./components/Card/card";
import Comments, { AttributesComments } from "./components/Comments/comments";
import Navegation, { AttributesNav } from "./components/Navbar/Navbar";
import  Logobar, { AttributesLogo } from "./components/Logobar/Logobar";

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

      cards.setAttribute(Attributes.like, "../src/components/img/heart-regular.png");
      cards.setAttribute(Attributes.save, "../src/components/img/bookmark-regular.png");

      cards.addEventListener("likeClick", () => {
        this.toggleLike(cards);
      });
      cards.addEventListener("saveClick", () => {
        this.toggleSave(cards);
      });


this.card.push(cards);
});
}

connectedCallback() {
this.render();
}
toggleLike(card: ArtistCard) {
  const currentLike = card.getAttribute(Attributes.like);
  if (currentLike === "../src/components/img/heart-regular.png") {
    card.setAttribute(Attributes.like, "../src/components/img/heart-solid.png");
  } else {
    card.setAttribute(Attributes.like, "../src/components/img/heart-regular.png");
  }
}

toggleSave(card: ArtistCard) {
  const currentSave = card.getAttribute(Attributes.save);
  if (currentSave === "../src/components/img/bookmark-regular.png") {
    card.setAttribute(Attributes.save, "../src/components/img/bookmark-solid.png");
  } else {
    card.setAttribute(Attributes.save, "../src/components/img/bookmark-regular.png");
  }
}



  render() {
    if (this.shadowRoot) {
      const initialnav = this.ownerDocument.createElement("section") as Logobar;
      const logoanduser = this.ownerDocument.createElement("my-bar");
      logoanduser.setAttribute(AttributesLogo.logo, "../src/components/img/Captura de pantalla 2023-09-21 a la(s) 2.13.55 p.m..png");
      logoanduser.setAttribute(AttributesLogo.user, "../src/components/img/250px-Mona_Lisa.jpg");
      initialnav.classList.add("all-nav");

    initialnav.appendChild(logoanduser);
      this.shadowRoot.appendChild (initialnav)

    }



    if (this.shadowRoot) {
      const nave = this.ownerDocument.createElement("nav") as Navegation;


      const search = this.ownerDocument.createElement("my-navegation");
      search.setAttribute(AttributesNav.text, "Search");
      search.setAttribute(AttributesNav.icon, "../src/components/img/magnifying-glass-solid.png");

      const settings = this.ownerDocument.createElement("my-navegation");
      settings.setAttribute(AttributesNav.text, "Settings");
      settings.setAttribute(AttributesNav.icon, "../src/components/img/gear-solid.png");

      const friends = this.ownerDocument.createElement("my-navegation");
      friends.setAttribute(AttributesNav.text, "Friends");
      friends.setAttribute(AttributesNav.icon, "../src/components/img/user-group-solid.png");

      const profile = this.ownerDocument.createElement("my-navegation");
      profile.setAttribute(AttributesNav.text, "Profile");
      profile.setAttribute(AttributesNav.icon, "../src/components/img/user-solid.png");

      const moodboard = this.ownerDocument.createElement("my-navegation");
      moodboard.setAttribute(AttributesNav.text, "My Moodboard");
      moodboard.setAttribute(AttributesNav.icon, "../src/components/img/paintbrush-solid.png");

      const create = this.ownerDocument.createElement("my-navegation");
      create.setAttribute(AttributesNav.text, "Create");
      create.setAttribute(AttributesNav.icon, "../src/components/img/square-plus-solid.png");


      nave.appendChild(search);
      nave.appendChild(settings);
      nave.appendChild(friends);
      nave.appendChild(profile);
      nave.appendChild(moodboard);
      nave.appendChild(create);

      this.shadowRoot.appendChild(nave);
    }

    if (this.shadowRoot) {
      const container = this.ownerDocument.createElement("div");
      container.classList.add("artist-card-container");

      this.card.forEach((artistcard) => {
        const cardContainer = this.ownerDocument.createElement("div");
        cardContainer.classList.add("artist-card");
        cardContainer.appendChild(artistcard);


          const commentsComponent = this.ownerDocument.createElement("my-comments") ;

            commentsComponent.setAttribute(
          AttributesComments.profileimg, "../src/components/img/250px-Mona_Lisa.jpg" );
        commentsComponent.setAttribute(AttributesComments.username, "Maria");
        commentsComponent.setAttribute(AttributesComments.textcomment, "Este es el texto del comentario");



        cardContainer.appendChild(commentsComponent);
        container.appendChild(cardContainer);
      });

      this.shadowRoot?.appendChild(container);
    }
  }

}

customElements.define("app-container", AppContainer);