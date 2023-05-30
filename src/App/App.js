import React, { Component } from 'react';
import './App.css';
import ResContainer from "../ResContainer/ResContainer"
import Form from '../Form/Form';

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

  addRes = (newRes) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(newRes),
      headers: {"Content-Type": "application/json"}
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}, ${response.statusText}`)
        } else {
          return response.json();
        }
      })
      .then(obj => {
        this.setState({ reservations: [...this.state.reservations, obj]})
      })
      .catch(err => {throw new Error(`${err}`)})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form className="form" addRes={this.addRes} />
        </div>
        <div>
          <ResContainer className='resy-container' reservations={this.state.reservations} cancel={this.cancelRes} />
        </div>
      </div>
    )
  }
}

export default App;
