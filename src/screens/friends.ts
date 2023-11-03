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

	connectedCallback() {
		this.render();
	}

	async render() {
		if (this.shadowRoot) {this.shadowRoot.innerHTML = ``;

        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot?.appendChild(myNav);

		const friendsList = this.ownerDocument.createElement("div");
			this.shadowRoot?.appendChild(friendsList);

			const artistId = 'Vzr3itFP1wwRWe24NSgK'; // Reemplaza 'ID_DEL_USUARIO' con el ID del usuario deseado

			// Obtiene la lista de amigos del usuario con el artistId
			const friendData = await getFriendsById(artistId);

			if (friendData) {
				// Itera sobre la lista de amigos y crea elementos friend-card
				friendData.forEach((friend) => {
					const friendCard = this.ownerDocument.createElement("friend-card");
					friendCard.setAttribute(AttributesFriends.friendProfile, friend.profileimg); // Reemplaza con el campo correcto
					friendCard.setAttribute(AttributesFriends.friendName, friend.username); // Reemplaza con el campo correcto
					friendCard.setAttribute(AttributesFriends.friendOccupation, friend.occupation); // Reemplaza con el campo correcto
					friendsList.appendChild(friendCard);
				});
				console.log(friendData)
			}
	}
	}
}

customElements.define('app-friends', Friends);
export default Friends;