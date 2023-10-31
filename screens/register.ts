import "../components/export"
import { addObserver, appState, dispatch } from '../store/index';

class Register extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {this.shadowRoot.innerHTML = `
		`;

		const loginCard = this.ownerDocument.createElement("div");
        this.shadowRoot.appendChild(loginCard);

		const theTitle = this.ownerDocument.createElement("h1");
		theTitle.textContent = "SIGN UP";
		loginCard.appendChild(theTitle)

        const theSpace1 = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace1);

		const theSpace2  = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace2);

        const theSpace3  = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace3);

        const theSpace4  = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace4);

		const theButton = this.ownerDocument.createElement("my-newtton");
		loginCard.appendChild(theButton);

		const theTerm = this.ownerDocument.createElement("p");
		theTerm.textContent = "Already have an account? LogIn";
		loginCard.appendChild(theTerm)
	}
	}
}

customElements.define('app-register', Register);
export default Register;