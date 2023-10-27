import {artistData}from "../service/data";
import { AttributesProfile } from "../components/Profileinfo/Profileinfo";
import NavButton from "../components/navButton/navButton";
import "../components/export";
import "../components/nav/nav";
import styleMain from "./main.css"

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
      this.shadowRoot.innerHTML = `<style>${styleMain}</style>`;

        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot?.appendChild(myNav);

        const myProfile = this.ownerDocument.createElement("artist-profile")
        this.shadowRoot?.appendChild(myProfile);

    

        
      
        }}
  }

customElements.define("app-profile", Profile);
export default Profile;