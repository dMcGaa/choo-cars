var html = require('choo/html')
var header = require('~src/views/header.js')
import events from '../events.js'

export function view (state, emit) {
  if(!state.carsLoaded) loadCarData()
  
  return html`
    <body>
      ${header.view(state, emit)}
      <section class="ca-car-select">
      <label>Max Year (ex: 81)</label>
      <input type=text value=${state.year} oninput=${yearTextEntry}>
      <h2>Car Select</h2>
      <ul>
        ${filteredCars().map((i) => html`<li>${i["car name"]}</li>`)}
      </ul>
      </section>
    </body>
  `

  function loadCarData(){
    emit('loadcars')
  }

  function yearTextEntry(e){
    emit('year text', e.target.value)
  }

  function filteredCars() {
    return state.cars.filter((car) => {
      if(!state.year)
        return true
      if(state.year <= car["model year"])
        return true 
      return false
    })
  }
}

