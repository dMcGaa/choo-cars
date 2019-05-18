var html = require('choo/html')
var devtools = require('choo-devtools')
var choo = require('choo')
var mainView = require('./views/main.js')
var carSelectPage = require('./views/car-select.js')
var fourOhFourPage = require('./views/404.js')
var googleSignIn = require('./views/google-sign-in.js')
import axios from 'axios'
import {events} from './events.js'

var app = choo()
app.use(devtools())
app.use(countStore)
app.route('/', mainView.view)
app.route('/home', mainView.view)
app.route('/select-car', carSelectPage.view)
app.route('/sign-in', googleSignIn.view)
app.route('/*', fourOhFourPage.view)
app.mount('body')

function countStore (state, emitter) {
  state.count = 0
  state.carsLoaded = false
  state.year = ""
  emitter.on('increment', function (count) {
    state.count += count
    emitter.emit('render')
  })

  emitter.on('loadcars', () => {
  axios.get("https://api.myjson.com/bins/9hdjn", {})
    .then( (res) => {
      state.carsLoaded = true
      state.cars = res.data ? res.data : []
      emitter.emit('render')
    })
  })

  emitter.on('year text', (yearText) => {
    state.year = yearText
    emitter.emit('render')
  })

  state.links = [
    { name: "Home", route: "/home"},
    { name: "Car Select", route: "/select-car"},
    { name: "Google SignIn", route: "/sign-in"}
  ]
  state.cars = [
    {"car name": "Mercedes"},
    {"car name": "BMW"},
    {"car name": "Audi"},
    {"car name": "Tesla"}
  ]
}

