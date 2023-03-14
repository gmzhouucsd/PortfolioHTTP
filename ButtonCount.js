class ButtonCount extends HTMLElement {
    constructor() {
        super();
        let count = 0;
        this.attachShadow({ mode : 'open' });
        this.shadowRoot.innerHTML = `<button>Times Clicked: ${count}</button>`;
        this.addEventListener('click', () => {
            count += 1;
            console.log(count)
            this.shadowRoot.innerHTML = `<button>Times Clicked: ${count}</button>`;
        })
    }
}

customElements.define('button-count', ButtonCount);
