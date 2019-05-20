var html = require('choo/html')
import events from '../events.js'
import { pathOr } from 'ramda'

export function view (carDetails) {
  
  return html`
    <li>
      <div>${carDetails["model year"]}</div>
      <div>${carDetails["car name"]}</div>
      <div>${carDetails["milesPerGallon"]}</div>
      <div>${carDetails["weight"]}</div>
      <div>${carDetails["horsepower"]}</div>
      <div>${carDetails["displacement"]}</div>
      <div>${carDetails["cylinders"]}</div>
      <div>${carDetails["acceleration"]}</div>
    </li>
  `
}

export function listHeadings () {
  return html`
    <li>
      <div>Year</div>
      <div>Name</div>
      <div>MPG</div>
      <div>Weight</div>
      <div>Horsepower</div>
      <div>Displacement</div>
      <div>Cylinders</div>
      <div>Acceleration</div>
    </li>
  `
}

export function createCarDetails(carList) {
  let newCarList = []
  for ( let i=0; i<carList.length; i++) {
    let newCar = {}
    newCar["car name"] = pathOr("N/A", ["car name"], carList[i])
    newCar["model year"] = pathOr("00", ["model year"], carList[i])
    newCar["milesPerGallon"] = pathOr("00", ["miles", "gallon"], carList[i])
    newCar["weight"] = pathOr("--", ["weight"], carList[i])
    newCar["horsepower"] = pathOr("--", ["horsepower"], carList[i])
    newCar["displacement"] = pathOr("--", ["displacement"], carList[i])
    newCar["cylinders"] = pathOr("--", ["cylinders"], carList[i])
    newCar["acceleration"] = pathOr("--", ["acceleration"], carList[i])
    newCarList.push(newCar)
  }
  return newCarList
}
