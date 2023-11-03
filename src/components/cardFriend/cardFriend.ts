import { dispatch } from "../../store";
import { Actions } from "../../types/store";
import styleFriend from "./cardFriend.css"

export enum AttributesFriends {
  "friendProfile" = "friendProfile",
  "friendName" = "friendName",
  "friendOccupation" = "friendOccupation",

}

class cardFriend extends HTMLElement {

  friendProfile?: string;
  friendName?: string;
  friendOccupation?: string;


  static get observedAttributes() {
    const attributes: Record<AttributesFriends, null> = {
      friendProfile: null,
      friendName: null,
      friendOccupation: null,

    };
    return Object.keys(attributes);
  }

  attributeChangedCallback(
    propName: AttributesFriends,
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
      ${styleFriend}
      </style>
      <div class="cont-all">
      <div class="cont-image">
      <img class="profile-image" src="${this.friendProfile}" alt="imagen de perfil">
      </div>
      <div class="cont-info">
      <b><p class="userName">${this.friendName}</p></b>
      <p class="userOcc">${this.friendOccupation}</p>
      </div>
      </div>
      `
      }

  }

}

customElements.define("friend-card", cardFriend);
export default cardFriend;