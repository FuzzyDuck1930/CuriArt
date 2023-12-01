import styleSign from "./cardSign.css"
import { navigate } from "../../store/actions";
import { dispatch } from "../../store";
import { Screens } from "../../types/navegation";
import Firebase from "../../utils/firebase";
import { UserData } from "../../types/userdata";
import { newUserData } from "../../types/newUser";

const formPost: Omit<newUserData, "id"> = {
    email: "",
    password: "",
    username: "",
    occupation: "",
};

class cardSign extends HTMLElement {

    constructor() {
    super();
    this.attachShadow({ mode: "open" });
    }


    connectedCallback() {
    this.render();
    }

    submitForm(){
        // firebase.addPosts(formPost);
        Firebase.createUser(formPost.email,formPost.password, formPost.username, formPost.occupation);
        // firebase.logIn(formPost.email,formPost.password);
    }

    changeEmail(e: any){
        formPost.email = e.target.value;
    }

    changePassword(e:any){
        formPost.password = e.target.value;
    }

    changeUsername(e:any){
        formPost.username = e.target.value;
    }

    changeOccupation(e:any){
        formPost.occupation = e.target.value;
    }

    render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <style>
        ${styleSign}
        </style>
        `
        const contAll = document.createElement('div');
        contAll.classList.add('cont-all');

        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'Sign Up';

        const usernameInput = document.createElement('input');
        usernameInput.classList.add('imputt');
        usernameInput.placeholder = 'Username';
        usernameInput.type = "username";
        usernameInput.addEventListener("change", this.changeUsername);


        const passwordInput = document.createElement('input');
        passwordInput.classList.add('imputt');
        passwordInput.placeholder = 'Password';
        passwordInput.type = "password";
        passwordInput.addEventListener("change", this.changePassword);

        const emailInput = document.createElement('input');
        emailInput.classList.add('imputt');
        emailInput.placeholder = 'E-mail';
        emailInput.type = "email";
        emailInput.addEventListener("change", this.changeEmail);

        const occupationInput = document.createElement('input');
        occupationInput.classList.add('imputt');
        occupationInput.placeholder = 'Work file';
        occupationInput.type = "occupation";
        occupationInput.addEventListener("change", this.changeOccupation);

        const accessButton = document.createElement('button');
        accessButton.classList.add('access');
        accessButton.textContent = 'CREATE ACCOUNT';
        accessButton.addEventListener("click",this.submitForm);

        const contAlter = document.createElement('div');
        contAlter.classList.add('cont-alter');


        contAll.appendChild(title);
        contAll.appendChild(usernameInput);
        contAll.appendChild(passwordInput);
        contAll.appendChild(emailInput);
        contAll.appendChild(occupationInput);
        contAll.appendChild(accessButton);
        contAll.appendChild(contAlter);
        this.shadowRoot.appendChild(contAll)



    }
    }}

customElements.define("my-sign", cardSign);
export default cardSign;