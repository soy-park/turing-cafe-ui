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
          placeholder='Title'
          name='title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <button onClick={event => submitIdea(event)}>SUBMIT</button>
      </form>
    )
}

export default Form;