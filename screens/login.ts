import "../components/export"
import { addObserver, appState, dispatch } from '../store/index';

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {this.shadowRoot.innerHTML = '<link rel="stylesheet" href="styles.css">';
		const loginCard = this.ownerDocument.createElement("div");
        this.shadowRoot.appendChild(loginCard);

		const theTitle = this.ownerDocument.createElement("h1");
		theTitle.innerHTML= (`hello`)

        const theSpace1 = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace1 );

		const theSpace2  = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace2);

		const theSpace3  = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace3);

		const theSpace4  = this.ownerDocument.createElement("my-input");
        loginCard.appendChild(theSpace4);

		const theButton = this.ownerDocument.createElement("my-newtton");
		loginCard.appendChild(theButton);
	}
	}
}

customElements.define('app-dashboard', Dashboard);