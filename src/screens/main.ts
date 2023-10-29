import ArtistCard, { Attributes } from "../components/Card/Card";
import { AttributesComments } from "../components/Comments/Comments";
import { addObserver, appState, dispatch } from "../store/index";
import { navigate } from "../store/actions";
import { Screens } from "../types/navegation";
import "../components/export"
import styleMain from "./main.css";
import { getUserData, getPostData } from "../service/firebase";

class Dashboard extends HTMLElement {
  card: ArtistCard[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
   await this.loadData();
    this.render();
  }

   async loadData() {
     try {
       const userData = await getUserData();
       const postData = await getPostData();
       console.log(userData)
        console.log(postData)

          userData.forEach((user) => {
         const cards = this.ownerDocument.createElement("artist-card") as ArtistCard;
         cards.setAttribute(Attributes.profileimg, user.profileimg);
         cards.setAttribute(Attributes.username, user.username);
         cards.setAttribute(Attributes.occupation, user.occupation);

        
         // Encuentra el post correspondiente al usuario actual
         const post = postData.find((post) => post.userId === user.id);

         if (post) {
           // Si se encontró un post, configura la descripción e imagen del post
          cards.setAttribute(Attributes.description, post.description);
           cards.setAttribute(Attributes.image, post.imageUrl);
         }

         cards.setAttribute(Attributes.isLike, "../src/components/img/heart-regular.png");
         cards.setAttribute(Attributes.save, "../../dist/img/Favoritos.png");

         this.card.push(cards);
        
       });
     } catch (error) {
       console.error("Error al cargar datos de Firebase:", error);
     }
   }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>${styleMain}</style>`;
      

      const myNav = this.ownerDocument.createElement("my-nav");
      this.shadowRoot.appendChild(myNav);

      if (this.shadowRoot) {
        const container = this.ownerDocument.createElement("div");
        container.classList.add("user-card-container");

        this.card.forEach((usercard) => {
          const cardContainer = this.ownerDocument.createElement("div");
          cardContainer.classList.add("user-card");
          cardContainer.appendChild(usercard);
          const commentsComponent = this.ownerDocument.createElement("my-comments");

          commentsComponent.setAttribute(
            AttributesComments.profileimg, "../../dist/img/Usuario.jpg"
          );
          commentsComponent.setAttribute(AttributesComments.username, "Maria");
          commentsComponent.setAttribute(AttributesComments.textcomment, "Este es el texto del comentario");

          cardContainer.appendChild(commentsComponent);

          container.appendChild(cardContainer);

           usercard.querySelector(".like-button")?.addEventListener("click", () => {
             // Obtiene el valor actual del atributo isLike
             const currentIsLike = usercard.getAttribute(Attributes.isLike);
            
             // Alterna entre las imágenes heart-regular.png y heart-solid.png
             if (currentIsLike === "../src/components/img/heart-regular.png") {
               usercard.setAttribute(Attributes.isLike, "../src/components/img/heart-solid.png");
             } else {
               usercard.setAttribute(Attributes.isLike, "../src/components/img/heart-regular.png");
             }
           });
        });
        

        this.shadowRoot?.appendChild(container);
      }
    }
  }
}

customElements.define("app-dashboard", Dashboard);
export default Dashboard;
