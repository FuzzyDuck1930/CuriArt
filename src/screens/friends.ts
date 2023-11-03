import { addObserver } from "../store";
import { Screens } from "../types/navegation";
import { appState, dispatch } from "../store/index";
import { ScreenActions } from "../types/store";
import "../components/export";
import { getUserData, getFriendsData, getFriendsById } from "../utils/firebase";
import { AttributesFriends } from "../components/cardFriend/cardFriend";

class Friends extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this)
	}

	async connectedCallback() {
		await this.render();
	}

	async render() {
		if (this.shadowRoot) {this.shadowRoot.innerHTML = ``;

        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot?.appendChild(myNav);

		const friendCard = this.ownerDocument.createElement("friend-card");
		this.shadowRoot?.appendChild(friendCard);

	}
	}
}

customElements.define('app-friends', Friends);
export default Friends;