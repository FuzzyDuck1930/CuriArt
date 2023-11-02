import firebase from "../../utils/firebase";
import commStyle from "./Comments.css";

const formComment = {
  text: "",
};

class Comments extends HTMLElement {
  cardId?: string;

  constructor(cardId: string) {
    super();
    this.attachShadow({ mode: "open" });
    this.cardId = cardId;
    this.render();
  }

  connectedCallback() {
    this.render();
    const cardId = this.getAttribute('cardId');

  }

  changePhase(e: any) {
    formComment.text = e.target.value;
  }

  async saveComment() {
    console.log(formComment)
    firebase.addComment(formComment);
    
  }

  async render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
        ${commStyle}
        </style>
      `;

      const container = this.ownerDocument.createElement("section");

      const comment = this.ownerDocument.createElement("input");
      comment.placeholder = "Write your comment";
      comment.value = formComment.text;
      comment.classList.add("comment-box");
      comment.addEventListener("change", this.changePhase);

      const save = this.ownerDocument.createElement("button");
      save.innerHTML = "Send";
      save.classList.add("comment-button");
      save.addEventListener("click", this.saveComment);

      this.shadowRoot?.appendChild(comment);
      this.shadowRoot?.appendChild(save);
      this.shadowRoot?.appendChild(container);

      const comments = await firebase.getComment();

      comments.forEach((comment: any) => {
        const containercomment = this.ownerDocument.createElement("div");
        const phase = this.ownerDocument.createElement("h4");
        phase.innerHTML = comment.text;
       phase.classList.add("comment-phase");
        containercomment.appendChild(phase);

        // Agregar el comentario al contenedor
        container.appendChild(containercomment);
      });
    }
  }
}

customElements.define("my-comments", Comments);
export default Comments;