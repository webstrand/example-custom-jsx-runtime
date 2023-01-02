export class WebComponent extends HTMLElement {
	constructor () {
	  super();

	  const shadow = this.attachShadow({ mode: 'closed' });
	  const value = 'Eureka !!';

	  shadow.appendChild(<div>
		{value}
	  </div>);
	}
  }

  customElements.define('editable-list', WebComponent);
