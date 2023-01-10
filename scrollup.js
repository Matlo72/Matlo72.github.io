(function () {
  let tmpl = document.createElement('template');
  tmpl.innerHTML = 
  `<button type="button" id="myBtn">Scroll up</button>
  <style>
  #myBtn {
			height : 100%;
      width : 100%;
		} 		
		</style>
  ` ;   
 
  class Scrollup_btn extends HTMLElement {
      constructor() {
          super();
          this.init();           
      }

      init() {            
          let shadowRoot = this.attachShadow({mode: "open"});
          shadowRoot.appendChild(tmpl.content.cloneNode(true));
          this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
          });
         
        }
        
      fireChanged() {              
          __panel3.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                            });
                     }  
                     
        onCustomWidgetBeforeUpdate(changedProperties) {
        this._props = { ...this._props, ...changedProperties };
              
      }
  
      onCustomWidgetAfterUpdate(changedProperties) {
        if ("color" in changedProperties) {
          this.style["background-color"] = changedProperties["color"];
        }
        if ("fontColor" in changedProperties) {
          this.style["color"] = changedProperties["fontColor"];
        }
      }
  }
customElements.define('com-button-scrollup', Scrollup_btn);
})();
