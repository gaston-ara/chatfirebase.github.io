import React, { useEffect, useState } from 'react'
import ChatInputs from './ChatInputs'
import MessagesContainer from './MessagesContainer'
import { getMessages, setMessages, onGetMessages, logout } from '../firebase/firebase'
import ChatHeader from './ChatHeader'

const ChatContainer = (props) => {
  const [message, setMessage] = useState('')
  const [allMessages, setAllMessages] = useState([])

  const obtenerMensajes = async () => {

   await onGetMessages(() => {
     getMessages()
        .then(res => {
          setAllMessages(res.docs.map(doc => doc.data()))
        })
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let username = props.userName
    let time = Date.now();
    message !== '' && await setMessages({ message, time, username })
    setMessage('');
    obtenerMensajes()
    } catch (error) {
      console.error(error)
    }
    
  }
  const handleLogout = async () => {
   try {
     await logout()
   } catch (error) {
     console.error(error)
   }
  }
  useEffect(() => {
    obtenerMensajes()
  }, [])
  return (
    <>
      <ChatHeader userPhoto={props.userPhoto} logout={handleLogout}/>
      <MessagesContainer allMessages={allMessages} userName={props.userName} />
      <ChatInputs handleSubmit={handleSubmit} setMessage={setMessage} message={message} />
    </>
  )
}

export default ChatContainer