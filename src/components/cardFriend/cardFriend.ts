import { dispatch } from "../../store";
import { Actions } from "../../types/store";


export enum Attributes {
  "friendProfile" = "friendProfile",
  "friendName" = "friendName",
  "friendOccupation" = "friendOccupation",

}

class cardFriend extends HTMLElement {

  friendProfile?: string;
  friendName?: string;
  friendOccupation?: string;


  static get observedAttributes() {
    const attributes: Record<Attributes, null> = {
      friendProfile: null,
      friendName: null,
      friendOccupation: null,

    };
    return Object.keys(attributes);
  }

  attributeChangedCallback(
    propName: Attributes,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;
    this.render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }


  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <style>
      </style>
      <div>
      <div>
      <img class="profile-image" src="${this.friendProfile}" alt="imagen de perfil">
      </div>
      <div>
      <p>${this.friendName}</p>
      <p>${this.friendOccupation}</p>
      </div>
      <div>
      <button>View profile</button>
      </div>
      </div>
      `
      }

  }

}

customElements.define("friend-card", cardFriend);
export default cardFriend;