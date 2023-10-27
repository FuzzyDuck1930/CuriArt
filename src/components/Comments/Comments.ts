import commStyle from "./Comments.css"

export enum AttributesComments {
    "profileimg" = "profileimg",
    "username" = "username",
    "textcomment" = "textcomment",
  }

export default class Comments extends HTMLElement {
    profileimg?: string;
    username?: string;
    textcomment?: string;

    static get observedAttributes() {
      const attributes: Record<AttributesComments , null> = {
        username: null,
        textcomment: null,
        profileimg: null,
      };
      return Object.keys(attributes);
    }

    attributeChangedCallback(
      propName: AttributesComments ,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      this[propName] = newValue;
      this.render();
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <style>
        ${commStyle}
        </style>
          <section class="comment">
          <div class="infoCom">
          <div class="namYpro">
            <img class="commProf" src="${this.profileimg}" alt="artimage">
            <h1 class="commUser">${this.username}</h1>
            </div>
            <p class="commSaid">${this.textcomment}</p>
            </div>
            <input type="text" class="comment-box" placeholder="Write your comment">
          </section>
        `;
      }
    }
}

  customElements.define("my-comments", Comments);