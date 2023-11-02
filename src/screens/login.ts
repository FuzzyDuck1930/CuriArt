import { addObserver } from "../store";
import { Screens } from "../types/navegation";
import { appState, dispatch } from "../store/index";
import { ScreenActions } from "../types/store";
import "../components/export";

class Login extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this)
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {this.shadowRoot.innerHTML = ``;

        const myNav = this.ownerDocument.createElement("my-nav-landing");
        this.shadowRoot?.appendChild(myNav);

		const loginCard = this.ownerDocument.createElement("my-log");
        this.shadowRoot?.appendChild(loginCard);

	}
	}
}

customElements.define('app-login', Login);
export default Login;