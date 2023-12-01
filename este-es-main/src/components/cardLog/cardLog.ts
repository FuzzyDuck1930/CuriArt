import styleLog from "./cardLog.css"
import { navigate } from "../../store/actions";
import { dispatch } from "../../store";
import { Screens } from "../../types/navegation";
import Firebase from "../../utils/firebase";

const credentials = { email: "", password: ""};

class cardLog extends HTMLElement {

    constructor() {
    super();
    this.attachShadow({ mode: "open" });
    }


    connectedCallback() {
    this.render();


    }

    async handleLoginButton() {
        Firebase.loginUser(credentials);
    }

    render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <style>
        ${styleLog}
        </style>
        `

        const contAll = document.createElement('div');
        contAll.classList.add('cont-all');

        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'LogIn';

        const emailInput = document.createElement('input');
        emailInput.classList.add('imputt');
        emailInput.setAttribute('placeholder', 'E-Mail');
        emailInput.type = "email";
        emailInput.addEventListener(
      "change",
      (e: any) => (credentials.email = e.target.value)
    );

        const passwordInput = document.createElement('input');
        passwordInput.classList.add('imputt');
        passwordInput.setAttribute('placeholder', 'Password');
        passwordInput.type = "password";
        passwordInput.addEventListener(
          "change",
          (e: any) => (credentials.password = e.target.value)
        );

         const accessButton = document.createElement('button');
        accessButton.classList.add('access');
        accessButton.textContent = 'Login';
        accessButton.addEventListener("click", this.handleLoginButton);


        const contAlter = document.createElement('div');
        contAlter.classList.add('cont-alter');

        const message = document.createElement('p');
        message.classList.add('message');
        message.textContent = "Don't have an account?";

        const signUpButton = document.createElement('button');
        signUpButton.classList.add('account');
        signUpButton.textContent = 'Sign Up';
        signUpButton.addEventListener('click', () => {
            dispatch(navigate(Screens.SIGNUP));
     });


        contAll.appendChild(title);
        contAll.appendChild(emailInput);
        contAll.appendChild(passwordInput);
        contAll.appendChild(accessButton);
        contAll.appendChild(contAlter);
        contAlter.appendChild(message);
        contAlter.appendChild(signUpButton);
        this.shadowRoot.appendChild(contAll);


    }
    }}

customElements.define("my-log", cardLog);
export default cardLog;