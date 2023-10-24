import * as components from "./components/export";
import "./components/export"
import "./screens/main"


class AppContainer extends  HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
        const dashboard = this.ownerDocument.createElement("app-dashboard")
        this.shadowRoot?.appendChild(dashboard)
        }
    }
}

customElements.define("app-container", AppContainer)
export default AppContainer;