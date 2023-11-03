    import styleLog from "./cardLog.css"

    class cardLog extends HTMLElement {

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
            ${styleLog}
            </style>

            <div class="cont-all">
            <h1 class="title">Login</h1>
            <input class="imputt" placeholder="Username" type="text">
            <input class="imputt" placeholder="Password" type="text">
            <button class="access" >Login</button>
            <div class="cont-alter">
            <p class="message">Don't have an account?</p>
            <button class="account">Sign Up</button>
            </div>
            </div>
            `


        }
        }}

    customElements.define("my-log", cardLog);
    export default cardLog;