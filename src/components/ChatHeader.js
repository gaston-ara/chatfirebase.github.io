import React, { useEffect, useState } from 'react'
import { getQuestions, setMessages } from '../firebase/firebase';

const ChatHeader = (props) => {
  const [arrayPreguntas, setArrayPreguntas] = useState([]);


  const handlePregunta = async (e) => {
    e.preventDefault()
    try {
      await obtenerPreguntas()
      arrayPreguntas.length > 0 && generarPregunta(newRandom());
    } catch (error) {
      console.error(error)
    }
  }

  const newRandom = () => {
    let random = Math.floor(Math.random() * arrayPreguntas.length);
    return random;
  }
  const generarPregunta = async (random) => {
   await enviarPregunta(random);
  }
  const enviarPregunta = async (random) => {
    let randomQuestion = (arrayPreguntas[random].pregunta);
    let message = randomQuestion;
    let time = Date.now();
    let username = 'Bot'
    randomQuestion !== "" && await setMessages({ message, time, username })
  }
  const obtenerPreguntas = async () => {
    await getQuestions()
    .then(res => {
      setArrayPreguntas(res.docs.map(doc => doc.data()))
    });
  }
useEffect(() => {
  obtenerPreguntas()
}, [])

  return (
    <nav>
      <div className="nav-container">
        <div className="user-image">
          <img src={props.userPhoto} alt="" />
        </div>
        <button onClick={(e) => handlePregunta(e)} className="pregunta">Pregunta</button>
        <button className="logout" onClick={props.logout}>Cerrar Sesión</button>
      </div>
    </nav>
  )
}

export default ChatHeader