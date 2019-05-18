var html = require('choo/html')

export function view (state, emit) {
    return html`
        <section class="ca-header">
        <h2>Choo Cars</h2>
        <div>${state.links.map(linkHtml)}</div>
        </section>
        `
        function linkHtml(link){return html`<a href=${link.route}>${link.name}/>`}
}

