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

		const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot?.appendChild(myNav);
	}
	}
}

customElements.define('app-login', Login);
export default Login;