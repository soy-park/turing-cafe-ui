import React, { Component } from 'react';
import './App.css';
import ResContainer from "../ResContainer/ResContainer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    return fetch("http://localhost:3001/api/v1/reservations")
      .then(response => {
        if (!response.ok) {
         throw new Error(`${response.status}, ${response.statusText}`)
        }
        return response.json()
    }) 
      .then(data => {
        this.setState({ reservations: data })
      })
      .catch(err => {throw new Error(`${err}`)})
  }

  cancelRes = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, { method: "DELETE" })
    .then(response => response.json())
    .then(res => this.setState({ reservations: res }))
    .catch(err => {throw new Error(`${err}`)})
  } 

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <ResContainer className='resy-container' reservations={this.state.reservations} cancel={this.cancelRes} />
      </div>
    )
  }
}

export default App;
