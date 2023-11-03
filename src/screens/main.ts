import ArtistCard, { Attributes } from "../components/Card/Card";
import Comment from "../components/Comments/Comments";
import { addObserver, appState, dispatch } from "../store/index";
import { navigate } from "../store/actions";
import "../components/export";
import styleMain from "./main.css";
import firebase from "../utils/firebase"
import { getComment, addComment,getPostData, getUserData} from "../utils/firebase";

class Dashboard extends HTMLElement {
  card: ArtistCard[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

   connectedCallback() {
    this.render();
  }

  async render() {

    try {
      
      const userData = await getUserData();
      const postData = await getPostData();
      console.log(userData);
      console.log(postData);

      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `<style>${styleMain}</style>`;

        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot.appendChild(myNav);

        if (this.shadowRoot) {
          const container = this.ownerDocument.createElement("div");
          container.classList.add("user-card-container");

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

            cards.setAttribute(Attributes.like, "../../../dist/img/Me gusta.png");
            cards.setAttribute(Attributes.save, "../../dist/img/Favoritos.png");

            this.card.push(cards);
          });

          this.card.forEach(async (usercard, index) => {
            const cardContainer = this.ownerDocument.createElement("div");
            cardContainer.classList.add("user-card");
            cardContainer.appendChild(usercard);
            const commentsComponent = this.ownerDocument.createElement("my-comments");
            commentsComponent.setAttribute('cardId', index.toString()); 

            const comments = await getComment(); (index.toString()); 
  
  
  cardContainer.appendChild(commentsComponent);
  

            cardContainer.appendChild(commentsComponent);
       

            container.appendChild(cardContainer);
          });

          this.shadowRoot?.appendChild(container);
        }
      }
    } catch (error) {
      console.error("Error al cargar datos de Firebase:", error);
    }
  }
}

customElements.define("app-dashboard", Dashboard);
export default Dashboard;