import stylePost from "./Post.css"

export enum Attributespost {
  "imgpost" = "imgpost",


}

class Artistpost extends HTMLElement {


    imgpost?: string;


  static get observedAttributes() {
    const attributes: Record<Attributespost, null> = {
        imgpost: null,


    };
    return Object.keys(attributes);
  }

  attributeChangedCallback(
    propName: Attributespost,
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
      ${stylePost}
      </style>
          <div class="post-group">
          <img class="profile-image" src="${this.imgpost}" alt="imagen de perfil">
        </div>
      `
     
    }
  }}

customElements.define("artist-post", Artistpost);
export default Artistpost;