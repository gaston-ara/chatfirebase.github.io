import React, { useEffect, useState } from 'react'
import ChatInputs from './ChatInputs'
import MessagesContainer from './MessagesContainer'
import { getMessages, setMessages, onGetMessages, logout } from '../firebase/firebase'
import ChatHeader from './ChatHeader'

const ChatContainer = (props) => {
  const [message, setMessage] = useState('')
  const [allMessages, setAllMessages] = useState([])

  const obtenerMensajes = async () => {
    onGetMessages(() => {
      getMessages()
        .then(res => {
          setAllMessages(res.docs.map(doc => doc.data()))
        })
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let username = props.userName
    let time = Date.now();
    message !== '' && setMessages({ message, time, username })
    setMessage('');
    obtenerMensajes()
  }
  const handleLogout = () => {
    logout()
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