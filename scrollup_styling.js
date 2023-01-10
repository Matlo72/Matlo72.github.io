(function()  {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Button Properties</legend>
				<table>
					<tr>
						<td>Background Color</td>
						<td><input id="background_color" type="text" size="40" maxlength="40"></td>
					</tr>
                    <tr>
						<td>Font Color</td>
						<td><input id="font_color" type="text" size="40" maxlength="40"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
	`;

	class ButtonStylingPanel extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							color: this.color,
                            fontColor:this.fonctColor
						}
					}
			}));
		}

		set color(newColor) {
			this._shadowRoot.getElementById("background_color").value = newColor;
		}

		get color() {
			return this._shadowRoot.getElementById("background_color").value;
		}

        set fontColor(newFontColor) {
			this._shadowRoot.getElementById("font_color").value = newFontColor;
		}

		get fontColor() {
			return this._shadowRoot.getElementById("font_color").value;
		}
	}

customElements.define("com-button-styling", ButtonStylingPanel);
})();