export enum AttributesLogo {
    "logo"="logo",
    "user"="user"
 
   }
   
   class Logobar extends HTMLElement {
 
     logo? : string;
     user? : string;
   
     static get observedAttributes() {
       const attributes: Record<AttributesLogo , null> = {
         logo: null,
         user: null,
       
       };
       return Object.keys(attributes);
     }
   
     attributeChangedCallback(
       propName: AttributesLogo ,
       oldValue: string | undefined,
       newValue: string | undefined
     ) {
       this[propName] = newValue;
       this.render();
     }
   
     constructor() {
       super();
       this.attachShadow({ mode: "open" });
     
     
       this.render();
     }
   
     connectedCallback() {
       this.render();
     }
   
     render() {
       if (this.shadowRoot) {
         this.shadowRoot.innerHTML = ` 
      
           <section>
             <img src="${this.logo}" alt="artimage">
             <img src="${this.user}" alt="artimage">
             
         
           </section>
         `
       }
     }
 }
   
   customElements.define("my-bar",Logobar );
   export default Logobar;
   