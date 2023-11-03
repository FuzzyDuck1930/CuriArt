import * as components from "./components/export";
import { navigate } from "./store/actions";
import "./screens/login"
import "./screens/signUp"
import "./screens/friends"
import "./screens/editIt"
import { addObserver, appState } from "./store/index";
import { Screens } from "./types/navegation";



class AppContainer extends  HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"});
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            switch (appState.screen) {

                case Screens.SIGNUP:
                    const register = this.ownerDocument.createElement('app-register');
                    this.shadowRoot?.appendChild(register);
                    break;

                    case Screens.EDIT :
                        const edit = this.ownerDocument.createElement('app-edit');
                        this.shadowRoot?.appendChild(edit);
                        break;


                case Screens.LOGIN:
                    const login = this.ownerDocument.createElement('app-login');
                    this.shadowRoot?.appendChild(login);
                    break;

                case Screens.FRIENDS:
                    const friends = this.ownerDocument.createElement('app-friends');
                    this.shadowRoot?.appendChild(friends);
                    break;

            }
        }
        }
    }

customElements.define("app-container", AppContainer)
export default AppContainer;