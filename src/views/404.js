var html = require('choo/html')
var header = require('~src/views/header.js')

export function view (state, emit) {
    return html`
        <body>
        ${header.view(state, emit)}
        <section>
        <h2>404: Unknown Page</h2>
        </section>
        </body>
        `
}

