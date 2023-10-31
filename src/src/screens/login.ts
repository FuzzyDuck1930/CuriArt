import "../components/export"
import { addObserver, appState, dispatch } from '../store/index';

class Login extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {this.shadowRoot.innerHTML = ``;

		const loginCard = this.ownerDocument.createElement("div");
        this.shadowRoot.appendChild(loginCard);

		const theTitle = this.ownerDocument.createElement("h1");
		theTitle.textContent = "Login";
		loginCard.appendChild(theTitle)

        const theSpace1 = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace1);

		const theSpace2  = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace2);

		const theButton = this.ownerDocument.createElement("my-newtton");
		loginCard.appendChild(theButton);

		const theTerm = this.ownerDocument.createElement("p");
		theTerm.textContent = "Dont have an account? Sign Up";
		loginCard.appendChild(theTerm)
	}
	}
}

customElements.define('app-login', Login);
export default Login;