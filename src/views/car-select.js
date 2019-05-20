var html = require('choo/html')
var header = require('~src/views/header.js')
var carDetails = require('~src/views/car-details.js')
import events from '../events.js'

export function view (state, emit) {
  if(!state.carsLoaded) loadCarData()
  
  return html`
    <body>
      ${header.view(state, emit)}
      <section class="ca-car-select">
      <div>
        <label>Name Filter: </label>
        <input type=text value=${state.carNameFilter} oninput=${nameFilterTextEntry}>
      </div>
      <div>
        <label>Min Year (ex: 81)</label>
        <input type=text value=${state.year} oninput=${yearTextEntry}>
      </div>
      <h2>Car Select</h2>
      <ul class="ca-car-detail">
        ${carDetails.listHeadings()}
        ${filteredCars().map((i) => carDetails.view(i) )}
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

  function nameFilterTextEntry(e){
    emit('car name filter text', e.target.value)
  }

  function filteredCars() {
    return state.cars.filter((car) => {
      let isGreaterThanMinYear = !state.year ? true : car["model year"] >= state.year
      let hasText = !state.carNameFilter ? true : car["car name"].includes(state.carNameFilter)
      if(isGreaterThanMinYear && hasText)
          return true
      return false
    })
  }
}

