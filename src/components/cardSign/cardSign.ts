import styleSign from "./cardSign.css"

class cardSign extends HTMLElement {

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
        ${styleSign}
        </style>

        <div class="cont-all">
        <h1 class="title">Sign Up</h1>
        <input class="imputt" placeholder="Username" type="text">
        <input class="imputt" placeholder="Password" type="text">
        <input class="imputt" placeholder="E-mail" type="text">
        <input class="imputt" placeholder="Work file" type="text">
        <button class="access">Create Account</button>
        <div class="cont-alter">
        <p class="message">Already have an account?</p>
        <button class="account">LogIn</button>
        </div>
        </div>
        `


    }
    }}

customElements.define("my-sign", cardSign);
export default cardSign;