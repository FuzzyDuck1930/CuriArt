
import { dispatch } from "../../store";
import { Actions } from "../../types/store";


    export enum Attributes {
    "profileimg" = "profileimg",
    "username" = "username",
    "password" = "password",
    "email" = "email",
    "occupation" = "occupation",
    "userDescription" = "userDescription",

    }

    class editInfo extends HTMLElement {

    profileimg?: string;
    username?: string;
    password?: string;
    email?: string;
    occupation?: string;
    userDescription?: string;


    static get observedAttributes() {
        const attributes: Record<Attributes, null> = {
            profileimg: null,
            username: null,
            password: null,
            email: null,
            occupation: null,
            userDescription: null

        };
        return Object.keys(attributes);
    }

    attributeChangedCallback(
        propName: Attributes,
        oldValue: string | undefined,
        newValue: string | undefined
    ) {
        this[propName] = newValue;
        this.render();
    }

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
        <img class="profile-image" src="${this.profileimg}" alt="imagen de perfil">
        <button>Edit image</button>
        </div>

        <div>
        <p>Username</p>
        <input type="text" value="${this.username}">
        <p>Password</p>
        <input type="text" value="${this.password}">
        <p>Email</p>
        <input type="text" value="${this.email}">
        <p>Work file</p>
        <input type="text" value="${this.occupation}">
        <p>Description</p>
        <input type="text" value="${this.userDescription}">
        <button>Save changes</button>
        </div>
        `
        }

    }

    }

    customElements.define("edit-card", editInfo);
    export default editInfo;