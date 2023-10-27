import {artistData}from "../service/data";
import { AttributesProfile } from "../components/Profileinfo/Profileinfo";
import NavButton from "../components/navButton/navButton";
import "../components/export";
import "../components/nav/nav";
import styleProfile from "./profile.css"

class Profile extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

  }
  
  connectedCallback() {
    this.render();
  }


  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>${styleProfile}</style>`;

        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot?.appendChild(myNav);

        const Profilecont = this.ownerDocument.createElement("div");
        Profilecont.classList.add("Profilecontainer");
        this.shadowRoot?.appendChild(Profilecont);

        const myProfile = this.ownerDocument.createElement("artist-profile")
        this.shadowRoot?.appendChild(myProfile);

        const myPost = this.ownerDocument.createElement("artist-post")
        this.shadowRoot?.appendChild(myPost);

  
        Profilecont.appendChild(myProfile)
        Profilecont.appendChild(myPost)

    

        
      
        }}
  }

customElements.define("app-profile", Profile);
export default Profile;