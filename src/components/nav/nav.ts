import "../navButton/navButton";
import styleNave from "./nav.css"


class Nav extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ` <style>${styleNave}</style>`

            
            const nav = this.ownerDocument.createElement("nav")
            this.shadowRoot.appendChild(nav);

            const Logo = this.ownerDocument.createElement("img")
            Logo.setAttribute("src", "/dist/img/CURIART.png")
            Logo.setAttribute("class", "Logo")
            nav.appendChild(Logo);


            const setting = this.ownerDocument.createElement("navegation-button")
            setting.setAttribute("icon", "/dist/img/Ajustes.png")
            setting.setAttribute("text","Ajustes" )
            nav.appendChild(setting);

            const friends = this.ownerDocument.createElement("navegation-button")
            friends.setAttribute("icon", "/dist/img/Amigos.png")
            friends.setAttribute("text","Amigos" )
            nav.appendChild(friends);

            const moodboard = this.ownerDocument.createElement("navegation-button")
            moodboard.setAttribute("icon", "/dist/img/Moodboard.png")
            moodboard.setAttribute("text","Moodboard" )
            nav.appendChild(moodboard);

            const upload = this.ownerDocument.createElement("navegation-button")
            upload.setAttribute("icon", "/dist/img/Subir.png")
            upload.setAttribute("text","Subir" )
            nav.appendChild(upload);

            const userimg = this.ownerDocument.createElement("img")
            userimg.setAttribute("src", "/dist/img/Usuario.jpg")
            userimg.setAttribute("class", "userimg")
            nav.appendChild(userimg);



        }
    }
}

customElements.define("my-nav",Nav);
export default Nav;