import React, { useEffect, useState } from 'react'
import ChatInputs from './ChatInputs'
import MessagesContainer from './MessagesContainer'
import { getMessages, setMessages, onGetMessages} from '../firebase/firebase'
//Programar diferencia estetica entre mensajes enviados y mensajes recibidos asi como tambien sus horarios.

const ChatContainer = (props) => {
  const [message, setMessage] = useState('')
  const [allMessages, setAllMessages] = useState([])


  const obtenerMensajes = async () => {
    onGetMessages(() => {
    getMessages()
    .then(res => {
      setAllMessages(res.docs.map(doc => doc.data()))
    })
    console.log(allMessages);
    })
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let username = props.userName
    let time = new Date().getHours() + ':' + String(new Date().getMinutes()).padStart(2, '0') + ':' + String(new Date().getSeconds()).padStart(2, '0');
    message !== '' && setMessages({ message, time, username })
    setMessage('');
    obtenerMensajes()
    console.log(allMessages);
  }
  useEffect(() => {
obtenerMensajes()
    console.log(allMessages);
  }, [])
  return (
    <>
      <MessagesContainer allMessages={allMessages} userName={props.userName} />
      <ChatInputs handleSubmit={handleSubmit} setMessage={setMessage} message={message} />
    </>
  )
}

export default ChatContainer