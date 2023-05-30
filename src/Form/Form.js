import React, { useState } from 'react';
import 'src/Form/Form.css';

function Form(props) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [number, setNumber] = useState(0)

  const submitRes = event => {
    event.preventDefault();
    const newRes = {
      id: Date.now(),
      name: name,
      date: date,
      time: time, 
      number: number
    }
    props.addRes(newRes);
    clearInputs();
  }

  const clearInputs = () => {
    setName('')
    setDate('')
    setTime('')
    setNumber(0)
  }

  return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={date}
          onChange={event => setDescription(event.target.value)}
        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={time}
          onChange={event => setDescription(event.target.value)}
        />

        <input
          type='text'
          placeholder='Number of guests'
          name='number'
          value={number}
          onChange={event => setDescription(event.target.value)}
        />

        <button className="make-res-button" onClick={event => submitRes(event)}>Make Reservation</button>
      </form>
    )
}

export default Form;