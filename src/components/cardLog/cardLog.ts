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
            </style>

            <div>
            <h1>Login</h1>
            <input placeholder="Username" type="text">
            <input placeholder="Password" type="text">
            <button>Login</button>
            <p>Don't have an account?</p>
            <button>Sign Up</button>
            </div>
            `


        }
        }}

    customElements.define("my-log", cardLog);
    export default cardLog;