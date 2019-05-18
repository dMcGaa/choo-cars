var html = require('choo/html')
var header = require('~src/views/header.js')

export function view (state, emit) {
    return html`
        <body>
        ${header.view(state, emit)}
        <section>
          <h2>Count</h2>
          <h3>count is ${state.count}</h3>
          <button onclick=${clickInc}>Increment</button>
        </section>
        </body>
        `

        function clickInc () {
            emit('increment', 1)
        }
}

