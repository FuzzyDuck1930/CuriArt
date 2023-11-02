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
        </style>

        <div>
        <h1>Sign Up</h1>
        <input placeholder="Username" type="text">
        <input placeholder="Password" type="text">
        <input placeholder="E-mail" type="text">
        <input placeholder="Work file" type="text">
        <button>Create Account</button>
        <p>Already have an account?</p>
        <button>LogIn</button>
        </div>
        `


    }
    }}

customElements.define("my-sign", cardSign);
export default cardSign;