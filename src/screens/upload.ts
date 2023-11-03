 
 import { addObserver, appState, dispatch } from "../store/index";
 import { navigate } from "../store/actions";
import "../components/export";
import styleUpload from "./upload.css";
import { Screens } from "../types/navegation";
import ArtistCard, { Attributes } from "../components/Card/Card";
 import firebase from "../utils/firebase"
 import { addPost,getPostData, getUserData} from "../utils/firebase";
 
 const formPost = {
  imageUrl: "",
  description: "",
  userId: "",
};
 class  Upload extends HTMLElement {

   constructor() {
     super();
    this.attachShadow({ mode: "open" });
     addObserver(this);
  }
    connectedCallback() {
     this.render();
   }
   
  async savePost() {
    const userId = "Vzr3itFP1wwRWe24NSgK"; 
    formPost.userId = userId; 
    console.log(formPost);
    firebase.addPost(formPost);
  }

   changeimg(e: any) {
    formPost.imageUrl = e.target.value; }

    handleUploadClick = () => {
      this.savePost(); // Ahora this se refiere al contexto de la instancia de la clase
      dispatch(navigate(Screens.DASHBOARD));
    }
    

    changedesc(e: any) {
      formPost.description = e.target.value; }

   async render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `<style>${styleUpload} </style>`;
  
        const nav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot?.appendChild(nav);

        const Uploadcont = this.ownerDocument.createElement("div");
        Uploadcont.classList.add("Uploadcontainer");
        this.shadowRoot?.appendChild(Uploadcont);

        const img = this.ownerDocument.createElement("img");
        img.setAttribute("src", "../../dist/img/Vector.png");
        img.classList.add("img-style"); 
        Uploadcont.appendChild(img);

        const inputimg = this.ownerDocument.createElement("input");
        inputimg.placeholder = "Your file here";
        inputimg.classList.add("input-style")
        inputimg.addEventListener("change", this.changeimg);

        Uploadcont.appendChild(inputimg);
        

        const inputdesc = this.ownerDocument.createElement("input");
        inputdesc.classList.add("input-style")
        inputdesc.placeholder = "Your description here";
        inputdesc.addEventListener("change", this.changedesc);
        Uploadcont.appendChild(inputdesc);

      
  

        const butn = this.ownerDocument.createElement("button");
        butn.innerHTML = "Upload";
        butn.classList.add("mi-butn");
        inputdesc.classList.add("input-desc");
        butn.addEventListener("click", this.handleUploadClick)

        
    Uploadcont.appendChild(butn);
       
        const post = await firebase.getPostData();
        post.forEach((post: any) => {
          const card = this.ownerDocument.createElement("artist-card") as ArtistCard;
          card.setAttribute(Attributes.description, post.description);
          card.innerHTML=post.description;
          card.setAttribute(Attributes.image, post.imageUrl);
        } )
    } 
 } 
} 


    
 customElements.define("app-upload", Upload);
  export default  Upload;
